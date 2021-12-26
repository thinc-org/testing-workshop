import * as mongoose from 'mongoose'
import { CatSchema, CatDocument } from '../schemas/cat.schema'

async function initDB() {
  const db = await mongoose.connect('mongodb://localhost:27017/workshop')

  const CatModel = db.model('cat', CatSchema) as mongoose.Model<CatDocument>

  const cat1 = new CatModel({
    name: 'cat1',
    age: 3,
    breed: 'persian',
    parentIds: [],
  })
  const { _id: cat1Id } = await cat1.save()

  const cat2 = new CatModel({
    name: 'cat2',
    age: 3,
    breed: 'persian',
    parentIds: [],
  })
  const { _id: cat2Id } = await cat2.save()

  const cat3 = new CatModel({
    name: 'cat3',
    age: 1,
    breed: 'persian',
    parentIds: [cat1Id, cat2Id],
  })
  await cat3.save()

  const cat4 = new CatModel({
    name: 'cat4',
    age: 5,
    breed: 'maine',
    parentIds: [],
  })
  const { _id: cat4Id } = await cat4.save()

  const cat5 = new CatModel({
    name: 'cat5',
    age: 4,
    breed: 'maine',
    parentIds: [cat4Id],
  })
  await cat5.save()

  db.connection.close()
}

initDB()
