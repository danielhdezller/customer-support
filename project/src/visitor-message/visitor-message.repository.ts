import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { VisitorMessage } from './schemas/visitor-message.schema';
import { CreateVisitorMessageDTO } from './dto/create-visitor-message.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class VisitorMessageRepository {
  constructor(
    @InjectModel(VisitorMessage.name)
    private visitorMessageModel: Model<VisitorMessage>,
  ) {}

  async createVisitorMessage(
    createVisitorMessageDTO: CreateVisitorMessageDTO,
  ): Promise<VisitorMessage> {
    return this.visitorMessageModel.create(createVisitorMessageDTO);
  }

  async findAll(): Promise<VisitorMessage[]> {
    return this.visitorMessageModel.find().exec();
  }
}
