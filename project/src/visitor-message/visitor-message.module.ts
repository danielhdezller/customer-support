import { Module } from '@nestjs/common';
import { VisitorMessageController } from './visitor-message.controller';
import { VisitorMessageService } from './visitor-message.service';
import { VisitorMessageRepository } from './visitor-message.repository';
import { MongooseModule } from '@nestjs/mongoose';
import {
  VisitorMessage,
  VisitorMessageSchema,
} from './schemas/visitor-message.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: VisitorMessage.name, schema: VisitorMessageSchema },
    ]),
  ],
  controllers: [VisitorMessageController],
  providers: [VisitorMessageService, VisitorMessageRepository],
})
export class VisitorMessageModule {}
