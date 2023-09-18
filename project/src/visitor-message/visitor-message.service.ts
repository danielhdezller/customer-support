import { Injectable } from '@nestjs/common';
import { CreateVisitorMessageDTO } from './dto/create-visitor-message.dto';
import { VisitorMessageRepository } from './visitor-message.repository';

@Injectable()
export class VisitorMessageService {
  constructor(
    private readonly visitorMessageRepository: VisitorMessageRepository,
  ) {}
  async processVisitorMessage(
    createVisitorMessageDTO: CreateVisitorMessageDTO,
  ) {
    const createVisitorMessage =
      await this.visitorMessageRepository.createVisitorMessage(
        createVisitorMessageDTO,
      );
    return createVisitorMessage;
  }
}
