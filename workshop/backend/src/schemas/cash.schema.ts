import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

@Schema()
export class Cash {
  @Prop({ type: String, required: true })
  ownerId: string

  @Prop({ type: String, required: true })
  ownerName: string

  @Prop({ type: Number })
  balance?: number
}

export type CashDocument = Cash & Document

export const CashSchema = SchemaFactory.createForClass(Cash)
