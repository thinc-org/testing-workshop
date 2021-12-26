import { Test, TestingModule } from '@nestjs/testing'
import { CatService } from './cat.service'
import { CatController } from './cat.controller'
import { MongooseModule } from '@nestjs/mongoose'
import { CatSchema } from 'src/schemas/cat.schema'
import { closeInMongodConnection, rootMongooseTestModule } from 'test/mongo'
import { getMockRes } from '@jest-mock/express'
import { Promise } from 'mongoose'

const mockCats = [
  { _id: '1', name: 'cat1', age: 3, breed: 'persian', parentIds: [] },
  { _id: '2', name: 'cat2', age: 3, breed: 'persian', parentIds: [] },
  { _id: '3', name: 'cat3', age: 1, breed: 'persian', parentIds: [] },
]

describe('CatController', () => {
  let service: CatService
  let controller: CatController

  const { res, mockClear } = getMockRes()

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        rootMongooseTestModule(),
        MongooseModule.forFeature([{ name: 'Cat', schema: CatSchema }]),
      ],
      controllers: [CatController],
      providers: [CatService],
    }).compile()

    service = module.get<CatService>(CatService)
    controller = module.get<CatController>(CatController)

    jest.clearAllMocks()
    mockClear()
  })

  afterAll(async () => {
    await closeInMongodConnection()
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })

  describe('findAll', () => {
    it('should return reponse of array of cats', async () => {
      const findAllCatsSpy = jest
        .spyOn(service, 'findAllCats')
        .mockImplementation(() => Promise.all(mockCats))

      await controller.findAll(res)

      expect(findAllCatsSpy).toBeCalledTimes(1)
      expect(res.json).toHaveBeenCalledWith(expect.objectContaining(mockCats))
    })
  })

  describe('findOne', () => {
    it('should return a cat', async () => {
      const mockCat = mockCats[0]
      const findCatSpy = jest
        .spyOn(service, 'findCat')
        .mockImplementation(() => Promise.resolve(mockCat))

      await controller.findOne(res, mockCat._id)

      expect(findCatSpy).toHaveBeenCalledTimes(1)
      expect(res.json).toHaveBeenCalledWith(expect.objectContaining(mockCat))
    })
  })

  describe('findParent', () => {
    it('should return a cat', async () => {
      const mockCat = mockCats[0]
      const mockParentCat = [mockCats[1], mockCat[2]]
      const findParentCatsSpy = jest
        .spyOn(service, 'findParentCats')
        .mockImplementation(() => Promise.resolve(mockParentCat))

      await controller.findParent(res, mockCat._id)

      expect(findParentCatsSpy).toHaveBeenCalledTimes(1)
      expect(res.json).toHaveBeenCalledWith(
        expect.objectContaining(mockParentCat),
      )
    })
  })

  describe('create', () => {
    it('should return created cat', async () => {
      const mockCat = mockCats[0]
      const createCatSpy = jest
        .spyOn(service, 'createCat')
        .mockImplementation(() => Promise.resolve(mockCat))

      await controller.create(res, mockCat)

      expect(createCatSpy).toHaveBeenCalledTimes(1)
      expect(res.json).toHaveBeenCalledWith({
        cat: expect.objectContaining(mockCat),
        message: 'Create Success',
      })
    })
  })

  describe('sell', () => {
    it('should return response message', async () => {
      const mockCat = mockCats[0]
      const sellCatSpy = jest
        .spyOn(service, 'sellCat')
        .mockImplementation(() => Promise.resolve(mockCat))

      await controller.sell(res, mockCat._id)

      expect(sellCatSpy).toHaveBeenCalledTimes(1)
      expect(res.json).toHaveBeenCalledWith({
        message: 'Sell Success',
      })
    })
  })

  describe('sellAll', () => {
    it('should return response message', async () => {
      const sellAllCatsSpy = jest.spyOn(service, 'sellAllCats')

      await controller.sellAll(res)

      expect(sellAllCatsSpy).toHaveBeenCalledTimes(1)
      expect(res.json).toHaveBeenCalledWith({
        message: 'Sell All Success',
      })
    })
  })
})
