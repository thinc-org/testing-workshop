import { MongooseModule } from '@nestjs/mongoose'
import { Test, TestingModule } from '@nestjs/testing'
import { Model } from 'mongoose'
import { CatDocument, CatSchema } from 'src/schemas/cat.schema'
import { closeInMongodConnection, rootMongooseTestModule } from 'test/mongo'
import { CatService } from './cat.service'

async function initializeMockDatabase(CatModel: Model<CatDocument>) {
  const { _id: cat1Id } = await new CatModel({
    name: 'cat1',
    age: 3,
    breed: 'persian',
    parentIds: [],
  }).save()

  const { _id: cat2Id } = await new CatModel({
    name: 'cat2',
    age: 3,
    breed: 'persian',
    parentIds: [],
  }).save()

  await new CatModel({
    name: 'cat3',
    age: 1,
    breed: 'persian',
    parentIds: [cat1Id, cat2Id],
  }).save()

  const { _id: cat4Id } = await new CatModel({
    name: 'cat4',
    age: 5,
    breed: 'maine',
    parentIds: [],
  }).save()

  await new CatModel({
    name: 'cat5',
    age: 4,
    breed: 'maine',
    parentIds: [cat4Id],
  }).save()
}

describe('CatService', () => {
  let service: CatService
  let CatModel: Model<CatDocument>

  /**
   * Setup module
   */
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        rootMongooseTestModule(),
        MongooseModule.forFeature([{ name: 'Cat', schema: CatSchema }]),
      ],
      providers: [CatService],
    }).compile()

    service = module.get<CatService>(CatService)
    CatModel = module.get<Model<CatDocument>>('CatModel')
    await initializeMockDatabase(CatModel)
  })

  /**
   * Clear Mock Database
   */
  afterEach(async () => {
    await CatModel.deleteMany({})
  })

  /**
   * Close Mock Database Connection
   */
  afterAll(async () => {
    await closeInMongodConnection()
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })

  it('should find one cat if exists', async () => {
    const mockCat = await CatModel.findOne({})

    const cat = await service.findCat(mockCat._id)

    expect(cat).toBeDefined()
  })

  it('should throw error if cat exist', async () => {
    const fn = async () => await service.findCat('unknowId')

    expect(fn()).rejects.toThrow(Error)
  })

  it('should find all cats', async () => {
    const cats = await service.findAllCats()

    expect(cats.length).toBe(5)
  })

  it('should find cat parent', async () => {
    const mockCat = await CatModel.findOne({ name: 'cat3' })

    const cats = await service.findParentCats(mockCat._id)

    expect(cats).toBeDefined()
    expect(cats.length).toBe(2)
  })

  it('should create a cat', async () => {
    const createdCat = await service.createCat({
      name: 'cat6',
      age: 3,
      breed: 'persian',
      parentIds: [],
    })

    const storedCat = await CatModel.findById(createdCat._id).exec()

    expect(storedCat).toBeDefined()
    expect(storedCat).toHaveProperty('name', 'cat6')
  })

  it('should sell a cat', async () => {
    const soldCat = await CatModel.findOne({})

    await service.sellCat(soldCat._id)

    const storedCat = await CatModel.findById(soldCat._id).exec()
    expect(storedCat).toBeNull()
  })

  it('should sell all cats', async () => {
    await service.sellAllCats()

    const storedCats = await CatModel.find({}).exec()

    expect(storedCats).toEqual([])
  })
})
