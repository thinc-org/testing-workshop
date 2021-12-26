import { MongooseModule, MongooseModuleOptions } from '@nestjs/mongoose'
import { MongoMemoryServer } from 'mongodb-memory-server'

let mongod: MongoMemoryServer

export const rootMongooseTestModule = (options: MongooseModuleOptions = {}) =>
  MongooseModule.forRootAsync({
    useFactory: async () => {
      const mongod = await MongoMemoryServer.create()
      const uri = mongod.getUri()
      return {
        uri,
        ...options,
      }
    },
  })

export const closeInMongodConnection = async () => {
  if (mongod) {
    await mongod.stop(true)
  }
}
