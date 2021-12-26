import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { isValidObjectId, Model } from 'mongoose'
import { Cat, CatDocument } from 'src/schemas/cat.schema'

@Injectable()
export class CatService {
  constructor(@InjectModel('Cat') private catModel: Model<CatDocument>) {}

  async findCat(catId: string): Promise<CatDocument | null> {
    if (!isValidObjectId(catId)) {
      throw new Error(`Cat id ${catId} is invalid`)
    }

    const cat = this.catModel.findById(catId)
    return cat.exec()
  }

  async findAllCats(): Promise<Cat[]> {
    return this.catModel.find().exec()
  }

  async findParentCats(catId: string): Promise<CatDocument[]> {
    if (!isValidObjectId(catId)) {
      throw new Error(`Cat id ${catId} is invalid`)
    }

    const foundCat = await this.findCat(catId)
    const parents = await this.catModel.find({ _id: foundCat.parentIds })
    return parents
  }

  async createCat(cat: Cat): Promise<CatDocument> {
    const createdCat = new this.catModel(cat)
    return createdCat.save()
  }

  async sellCat(catId: string): Promise<CatDocument | null> {
    if (!isValidObjectId(catId)) {
      throw new Error(`Cat id ${catId} is invalid`)
    }

    const foundCat = await this.catModel.findById(catId).exec()
    if (!foundCat) return null

    await this.catModel.deleteOne({ _id: catId }).exec()
    return foundCat
  }

  async sellAllCats(): Promise<void> {
    await this.catModel.deleteMany({}).exec()
  }
}
