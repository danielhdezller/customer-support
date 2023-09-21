import { DtoProperty } from 'src/shared/dto-property';
import { IsNotEmptyString } from 'src/shared/validators/is-not-empty-string.validator';

export class ReplyDTO {
  @DtoProperty({ example: '34d7831e137a4016a55f98926800a643' })
  @IsNotEmptyString()
  id: string;

  @DtoProperty({ example: 'Hello :) How can I help you?' })
  @IsNotEmptyString()
  text: string;
}

export class MessageDTO {
  @DtoProperty({ example: '34d7831e137a4016a55f98926800a643' })
  @IsNotEmptyString()
  id: string;

  @DtoProperty({ example: 'Greeting' })
  @IsNotEmptyString()
  name: string;

  @DtoProperty({ example: 'The visitor says hello.' })
  @IsNotEmptyString()
  description: string;

  @DtoProperty({ type: ReplyDTO })
  @IsNotEmptyString()
  reply: ReplyDTO;
}

export function getRandomReply(messages: MessageDTO[]): ReplyDTO {
  const randomIndex = Math.floor(Math.random() * messages.length);
  return messages[randomIndex].reply;
}

export enum IntentTypeEnum {
  NOT_FOUND = 'Not found',
  TECHNICAL_PROBLEMS = 'Error',
  GREETING = 'Greeting',
}

export const IntentReplyData: MessageDTO[] = [
  {
    id: '34d7831e137a4016a55f98926800a643',
    name: 'Greeting',
    description: 'The visitor says hello.',
    reply: {
      id: 'f35d7e0936a44102bac9cb96c81eec3b',
      text: 'Hello :) How can I help you?',
    },
  },
  {
    id: 'b6ec3deac5f94500aef55d9c410e37f7',
    name: 'Goodbye',
    description: 'The visitor says goodbye.',
    reply: {
      id: '9ba88034a89e4fdbb532bdb092717fa1',
      text: 'Goodbye, have a nice day!',
    },
  },
  {
    id: '61e218983f8b49f79405e8cf22992e61',
    name: 'Affirmative',
    description: 'The visitor confirms that something is true / correct.',
    reply: {
      id: '3c9029f14fd74a6aac3a571d403bab35',
      text: 'Great!',
    },
  },
  {
    id: '5a13917dac654cfaa10619de37a673c4',
    name: 'Negative',
    description:
      "The visitor confirms that they don't need help / something is not true or similar.",
    reply: {
      id: '133957c37f954d6a8c0b721fbc3b652a',
      text: 'Alright, please let me know if I can help you with anything else!',
    },
  },
  {
    id: '629ebabd5d714900bbc7eb2c9eceb927',
    name: 'Thank you',
    description: 'The visitor says thank you.',
    reply: {
      id: '17134b01d2e343bc81e48fad4ec2ca00',
      text: 'It was a pleasure to be of help :)',
    },
  },
  {
    id: 'f83a8f67dd8e4eef8c743a0f324aeca0',
    name: 'Are you a bot?',
    description:
      'The visitor wants to know if they are talking to a bot or a human.',
    reply: {
      id: '7d169954803d4bb4a40588c53eda620c',
      text: "I'm an AI bot, and I'm here to help you with your questions.",
    },
  },
  {
    id: 'f505432f6dcd40548983e4eab1675429',
    name: 'I want to speak with a human',
    description: 'The visitor wants to speak to a human agent.',
    reply: {
      id: '6ad4f9d516c44eb8ad765f557ecc3ca6',
      text: 'Let me transfer you to the first available agent.',
    },
  },
  {
    id: '0edf4a33873d482f857bfa0a5c16b7ce',
    name: 'Login Problems',
    description: 'The visitor has trouble logging in.',
    reply: {
      id: '6dc10b2946cf4099a02c14d8416fcb02',
      text: 'Oh no! Please give me your email and I will fix it.',
    },
  },
  {
    id: '29a0d3b7cecc4fe5955f6c5c30fbcf6b',
    name: 'Open or close account',
    description:
      'The visitor wants to create a new account or close an existing one.',
    reply: {
      id: 'd1bf934c18634586962758fb98ff44a1',
      text: 'Please follow these instructions "LINK" to open a new account.',
    },
  },
  {
    id: '29a0d3b7cecc4fe5955f6c5c30fbcf6a',
    name: 'I want to speak with a human',
    description: 'The visitor wants to speak with a human.',
    reply: {
      id: 'd1bf934c18634586962758fb98ff44a2',
      text: 'Of course, a human will contact you shortly.',
    },
  },
  {
    id: '29a0d3b7cecc4fe5955f6c5c30fbcf6b',
    name: 'Means or need to contact ',
    description: 'The visitor wants to contact.',
    reply: {
      id: 'd1bf934c18634586962758fb98ff44a3',
      text: 'Of course, a we will contact you shortly.',
    },
  },
  {
    id: '29a0d3b7cecc4fe5955f6c5c30fbcf6c',
    name: 'Product interest or quote request',
    description: 'The visitor wants a product.',
    reply: {
      id: 'd1bf934c18634586962758fb98ff44a4',
      text: 'We are delighted that you are interested in our product.',
    },
  },
  {
    id: '29a0d3b7cecc4fe5955f6c5c30fbcf6d',
    name: 'Updating customer information',
    description: 'The visitor wants update information.',
    reply: {
      id: 'd1bf934c18634586962758fb98ff44a5',
      text: 'Of course, provide the information you want to update.',
    },
  },
  {
    id: '29a0d3b7cecc4fe5955f6c5c30fbcf6e',
    name: 'Error',
    description: 'Technical problems',
    reply: {
      id: 'd1bf934c18634586962758fb98ff44a6',
      text: 'Sorry, we are experiencing technical problems.',
    },
  },
  {
    id: '29a0d3b7cecc4fe5955f6c5c30fbcf6f',
    name: 'Not found',
    description: 'Not found intent at ultimate.',
    reply: {
      id: 'd1bf934c18634586962758fb98ff44a7',
      text: "Excuse me, we don't understand you, can you repeat.",
    },
  },
];
