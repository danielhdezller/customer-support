import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IsHexadecimal } from 'class-validator';
import { HydratedDocument } from 'mongoose';
import { DtoProperty } from 'src/shared/dto-property';
import { IsNotEmptyString } from 'src/shared/validators/is-not-empty-string.validator';

export type VisitorMessageDocument = HydratedDocument<VisitorMessage>;

@Schema({ timestamps: true })
export class VisitorMessage {
  @Prop({ type: String, required: true })
  @DtoProperty()
  @IsHexadecimal()
  botIdentifier: string;

  @Prop({ type: String, required: true })
  @DtoProperty()
  @IsNotEmptyString()
  message: string;
}

export const VisitorMessageSchema =
  SchemaFactory.createForClass(VisitorMessage);
