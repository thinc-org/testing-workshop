import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { Cash, CashDocument } from 'src/schemas/cash.schema'

@Injectable()
export class CashService {
  constructor(@InjectModel('Cash') private cashModel: Model<CashDocument>) {}

  async getAllUserInfo(): Promise<CashDocument[]> {
    return await this.cashModel.find().exec()
  }

  async getUserInfo(userId: string): Promise<CashDocument | null> {
    return await this.cashModel.findOne({ owner: userId }).exec()
  }

  async createUser(userInfo: Cash): Promise<CashDocument> {
    return await this.cashModel.create({
      ownerId: userInfo.ownerId,
      ownerName: userInfo.ownerName,
      balance: userInfo.balance ?? 0,
    })
  }

  async updateUserBalance(
    userId: string,
    amount: number,
  ): Promise<CashDocument | null> {
    let userInfo = await this.getUserInfo(userId)

    if (!userInfo) {
      return null
    }

    const newBalance = userInfo.balance + amount

    if (newBalance < 0) {
      throw new Error('cannot withdraw more than balance')
    }

    return await this.cashModel
      .findOneAndUpdate(
        { owner: userId },
        { balance: userInfo.balance + amount },
        { new: true },
      )
      .exec()
  }
}
