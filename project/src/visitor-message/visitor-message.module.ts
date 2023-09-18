import { Module } from '@nestjs/common';
import { VisitorMessageController } from './visitor-message.controller';
import { VisitorMessageService } from './visitor-message.service';

@Module({
  controllers: [VisitorMessageController],
  providers: [VisitorMessageService],
})
export class VisitorMessageModule {}
