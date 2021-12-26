import { Module } from '@nestjs/common'
import { CatService } from './cat.service'
import { CatController } from './cat.controller'
import { MongooseModule } from '@nestjs/mongoose'
import { Cat, CatSchema } from 'src/schemas/cat.schema'

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Cat', schema: CatSchema }])],
  providers: [CatService],
  controllers: [CatController],
})
export class CatModule {}
