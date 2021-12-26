import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { CashSchema } from 'src/schemas/cash.schema'
import { CashController } from './cash.controller'
import { CashService } from './cash.service'

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Cash', schema: CashSchema }])],
  controllers: [CashController],
  providers: [CashService],
})
export class CashModule {}
