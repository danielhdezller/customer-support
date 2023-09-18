import { Body, Controller, Post } from '@nestjs/common';
import { CreateVisitorMessageDTO } from './dto/create-visitor-message.dto';
import { VisitorMessageService } from './visitor-message.service';

@Controller('visitor-messages')
export class VisitorMessageController {
  constructor(private readonly visitorMessageService: VisitorMessageService) {}

  @Post('')
  processVisitorMessage(
    @Body() createVisitorMessageDTO: CreateVisitorMessageDTO,
  ) {
    return this.visitorMessageService.processVisitorMessage(
      createVisitorMessageDTO,
    );
  }
}
