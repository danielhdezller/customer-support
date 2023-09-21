import { Module } from '@nestjs/common';
import { VisitorMessageController } from './controllers/visitor-message.controller';
import { VisitorMessageService } from './services/visitor-message.service';
import { VisitorMessageRepository } from './repositories/visitor-message.repository';
import { MongooseModule } from '@nestjs/mongoose';
import {
  VisitorMessage,
  VisitorMessageSchema,
} from './schemas/visitor-message.schema';
import { UltimateModule } from 'src/ultimate/ultimate.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: VisitorMessage.name, schema: VisitorMessageSchema },
    ]),
    UltimateModule,
  ],
  controllers: [VisitorMessageController],
  providers: [VisitorMessageService, VisitorMessageRepository],
})
export class VisitorMessageModule {}
