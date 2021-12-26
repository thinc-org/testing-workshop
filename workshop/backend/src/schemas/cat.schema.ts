import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

export type CatDocument = Cat & Document

@Schema()
export class Cat {
  @Prop({ type: String, required: true })
  name: string

  @Prop({ type: Number })
  age: number

  @Prop({ type: String })
  breed: string

  @Prop({ type: [String] })
  parentIds: string[]
}

export const CatSchema = SchemaFactory.createForClass(Cat)
