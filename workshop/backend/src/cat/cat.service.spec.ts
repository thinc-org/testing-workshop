import { MongooseModule } from '@nestjs/mongoose'
import { Test, TestingModule } from '@nestjs/testing'
import { Cat, CatSchema } from 'src/schemas/cat.schema'
import { closeInMongodConnection, rootMongooseTestModule } from 'test/mongo'
import { CatService } from './cat.service'

describe('CatService', () => {
  let service: CatService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        rootMongooseTestModule(),
        MongooseModule.forFeature([{ name: Cat.name, schema: CatSchema }]),
      ],
      providers: [CatService],
    }).compile()

    service = module.get<CatService>(CatService)
  })

  afterAll(async () => {
    await closeInMongodConnection()
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})
