import * as mongoose from 'mongoose'
import { CatSchema, CatDocument } from '../schemas/cat.schema'

async function initDB() {
  const db = await mongoose.connect('mongodb://localhost:27017/workshop')

  // Initialize Cat
  const CatModel = db.model('cat', CatSchema) as mongoose.Model<CatDocument>

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

  db.connection.close()
}

initDB()
