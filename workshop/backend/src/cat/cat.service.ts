import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { Cat, CatDocument } from 'src/schemas/cat.schema'

@Injectable()
export class CatService {
  constructor(@InjectModel('cat') private catModel: Model<CatDocument>) {}

  async findCat(catId: string): Promise<Cat> {
    return this.catModel.findById(catId).exec()
  }

  async findAllCats(): Promise<Cat[]> {
    return this.catModel.find().exec()
  }

  async findParentCats(catId: string): Promise<Cat[]> {
    const foundCat = await this.findCat(catId)
    return await Promise.all(
      foundCat.parentIds.map(parentId => this.findCat(parentId)),
    )
  }

  async createCat(cat: Cat): Promise<Cat> {
    const createdCat = new this.catModel(cat)
    return createdCat.save()
  }

  async killCat(catId: string): Promise<void> {
    const foundCat = await await this.catModel.findById(catId).exec()
    if (!foundCat) {
      throw new Error(`Cat with id ${catId} not found`)
    }
    await this.catModel.deleteOne({ _id: catId }).exec()
  }

  async clearCats(): Promise<void> {
    await this.catModel.deleteMany({}).exec()
  }
}
