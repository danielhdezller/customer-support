import { Injectable } from '@nestjs/common';
import { CreateVisitorMessageDTO } from '../dto/create-visitor-message.dto';
import { VisitorMessageRepository } from '../repositories/visitor-message.repository';
import { IntentReplyData, ReplyDTO } from '../resource/intent-reply-examples';
import { UltimateService } from 'src/ultimate/services/ultimate.service';
import { lastValueFrom } from 'rxjs';
import { Intent } from 'src/ultimate/interfaces/ultimate.response.interface';

export enum IntentTypeEnum {
  NOT_FOUND = 'Not found',
  TECHNICAL_PROBLEMS = 'Error',
}

@Injectable()
export class VisitorMessageService {
  constructor(
    private readonly visitorMessageRepository: VisitorMessageRepository,
    private readonly ultimateService: UltimateService,
  ) {}

  /**
   * It process a new visitor message:
   * - Store the visitor message to have a record.
   * - Should get which type of message is from PROVIDER.
   * - Analyze intent and reply to the customer.
   * @param {CreateVisitorMessageDTO} createVisitorMessageDTO
   * @return {*}
   * @memberof VisitorMessageService
   */
  async processVisitorMessage(
    createVisitorMessageDTO: CreateVisitorMessageDTO,
  ): Promise<ReplyDTO> {
    let reply: ReplyDTO = null;
    let intents: Intent[] = [];
    let intent: Intent = null;
    //Store the visitor messages to have a record.
    await this.visitorMessageRepository.createVisitorMessage(
      createVisitorMessageDTO,
    );
    try {
      // Call the PROVIDER.
      intents = await lastValueFrom(
        this.ultimateService.getPredictedIntent({
          botId: createVisitorMessageDTO.botIdentifier,
          message: createVisitorMessageDTO.message,
        }),
      );
      // Extract and ensures the highest confidence intent.
      if (intents.length) {
        intent =
          this.ultimateService.extractTheHighestConfidenceIntent(intents);
      }

      //Things to improve with more time: A Reply collection stored in a real DB.
      //COMMENT: I did not want to save the responses in the database for simplicity (it avoids loading all possible responses),
      // I think that for this case the JSON file is sufficient. On the other hand,
      // I am saving the log of requests received so that you can see my implementation with Mongo DB and the Repositories pattern.
      const message = IntentReplyData.find(
        (reply) => reply.name === intent?.name,
      );

      //Things to improve with more time: Collect the missing intents types in our IntentReplyData,
      // to add it later and thus be able to enrich our answers.
      reply = message?.reply;
      if (!intent || !message) {
        const message = IntentReplyData.find(
          (reply) => reply.name === IntentTypeEnum.NOT_FOUND,
        );
        reply = message.reply;
      }
    } catch (error) {
      const message = IntentReplyData.find(
        (reply) => reply.name === IntentTypeEnum.TECHNICAL_PROBLEMS,
      );
      reply = message.reply;
      //Things to improve with more time: A Error collection store in a real DB, to fix errors in the future.
    }

    return reply;
  }
}
