import { Body, Controller, Post } from '@nestjs/common';
import { CreateVisitorMessageDTO } from '../dto/create-visitor-message.dto';
import { VisitorMessageService } from '../services/visitor-message.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ReplyDTO } from '../resource/intent-reply-examples';

@Controller('visitor-messages')
@ApiTags('Visitor Messages')
export class VisitorMessageController {
  constructor(private readonly visitorMessageService: VisitorMessageService) {}

  @Post()
  @ApiOperation({
    description: 'Process the customer message and give a valid reply.',
  })
  @ApiResponse({ type: ReplyDTO })
  async processVisitorMessage(
    @Body() createVisitorMessageDTO: CreateVisitorMessageDTO,
  ): Promise<ReplyDTO> {
    return this.visitorMessageService.processVisitorMessage(
      createVisitorMessageDTO,
    );
  }
}
