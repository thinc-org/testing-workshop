import { Test, TestingModule } from '@nestjs/testing'
import { CatService } from './cat.service'
import { CatController } from './cat.controller'
import { MongooseModule } from '@nestjs/mongoose'
import { Cat, CatSchema } from 'src/schemas/cat.schema'
import { closeInMongodConnection, rootMongooseTestModule } from 'test/mongo'

describe('CatController', () => {
  let controller: CatController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        rootMongooseTestModule(),
        MongooseModule.forFeature([{ name: 'cat', schema: CatSchema }]),
      ],
      controllers: [CatController],
      providers: [CatService],
    }).compile()

    controller = module.get<CatController>(CatController)
  })

  afterAll(async () => {
    await closeInMongodConnection()
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })

  it('should find cat in database ')
})
