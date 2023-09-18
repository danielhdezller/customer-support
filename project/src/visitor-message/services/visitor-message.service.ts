import { Injectable } from '@nestjs/common';
import { CreateVisitorMessageDTO } from '../dto/create-visitor-message.dto';
import { VisitorMessageRepository } from '../repositories/visitor-message.repository';
import {
  IntentReplyData,
  ReplyDTO,
  getRandomReply,
} from '../resource/intent-reply-examples';

@Injectable()
export class VisitorMessageService {
  constructor(
    private readonly visitorMessageRepository: VisitorMessageRepository,
  ) {}

  /**
   * It process a new visitor message:
   * - Store the visitor message to have a record.
   * - Should get which type of message is from Ultimate
   * - Reply to the customer.
   * @param {CreateVisitorMessageDTO} createVisitorMessageDTO
   * @return {*}
   * @memberof VisitorMessageService
   */
  async processVisitorMessage(
    createVisitorMessageDTO: CreateVisitorMessageDTO,
  ): Promise<ReplyDTO> {
    //Store the visitor messages to have a record.
    await this.visitorMessageRepository.createVisitorMessage(
      createVisitorMessageDTO,
    );

    // Ideally after storing the message I should ask Ultimate which type of message it is, But the public api is not working
    // The I can get from my DB or the JSON resource the reply.

    return getRandomReply(IntentReplyData);
  }
}
