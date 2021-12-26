import { MongooseModule } from '@nestjs/mongoose'
import { Test, TestingModule } from '@nestjs/testing'
import { CashDocument, CashSchema } from 'src/schemas/cash.schema'
import { closeInMongodConnection, rootMongooseTestModule } from 'test/mongo'
import { CashService } from './cash.service'
import * as mongoose from 'mongoose'

async function initializeMockDatabase(CashModel: mongoose.Model<CashDocument>) {
  await new CashModel({
    ownerId: 'user1',
    ownerName: 'Kiki',
    balance: 200,
  }).save()

  await new CashModel({
    ownerId: 'user2',
    ownerName: 'Koko',
    balance: 100,
  }).save()

  await new CashModel({
    ownerId: 'user3',
    ownerName: 'Koro',
    balance: 10,
  }).save()
}

describe('CashService', () => {
  let service: CashService
  let CashModel: mongoose.Model<CashDocument>

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        rootMongooseTestModule(),
        MongooseModule.forFeature([{ name: 'Cash', schema: CashSchema }]),
      ],
      providers: [CashService],
    }).compile()

    service = module.get<CashService>(CashService)
    CashModel = module.get<mongoose.Model<CashDocument>>('CashModel')
    await initializeMockDatabase(CashModel)
  })

  afterAll(async () => {
    await closeInMongodConnection()
  })

  afterEach(async () => {
    await CashModel.deleteMany({})
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })

  describe('createUser', () => {
    it('should create a new user with zero balance', async () => {
      const mockUserInfo = {
        ownerId: 'user4',
        ownerName: 'user4',
      }

      const createdUser = await service.createUser(mockUserInfo)

      expect(createdUser.ownerId).toEqual(mockUserInfo.ownerId)
      expect(createdUser.ownerName).toEqual(mockUserInfo.ownerName)
      expect(createdUser.balance).toEqual(0)
    })

    it.todo('should create a new user with balnace as input', async () => {
      // TODO
    })
  })

  describe('getUserInfo', () => {
    it.todo('should get user info if exist', async () => {
      // TODO
    })

    it.todo('should get null if user does not exist', async () => {
      // TODO
    })
  })

  describe('updateUserBalance', () => {
    it.todo('should update selected user balance', async () => {
      // TODO
    })

    it.todo('should return null if user does not exsit', async () => {
      // TODO
    })

    it.todo(
      'should not update user balance if total balance is less than zero',
      async () => {
        // TODO
      },
    )
  })
})
