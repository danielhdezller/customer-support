import { PickType } from '@nestjs/swagger';
import { VisitorMessage } from '../schemas/visitor-message.schema';

export class CreateVisitorMessageDTO extends PickType(VisitorMessage, [
  'botIdentifier',
  'message',
]) {}
