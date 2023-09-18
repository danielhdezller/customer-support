import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import createTestApp from './createTestApp';
import { CreateVisitorMessageDTO } from 'src/visitor-message/dto/create-visitor-message.dto';

describe('VisitorMessage (e2e)', () => {
  let testApp: INestApplication;

  beforeAll(async () => {
    const { app } = await createTestApp({
      additionalModules: [],
    });
    testApp = app;
  });

  afterAll(async () => {
    await testApp.close();
  });

  it('/visitor-messages (POST). Cant process a visitor message without body.', async () => {
    await request(testApp.getHttpServer())
      .post('/api/visitor-messages')
      .send({})
      .expect(422);
  });

  it('/visitor-messages (POST). Cant process a visitor message with a wrong bot identifier.', async () => {
    const createVisitorMessageDTO: CreateVisitorMessageDTO = {
      message: 'Hello',
      botIdentifier: 'xxxxxx',
    };

    const response = await request(testApp.getHttpServer())
      .post('/api/visitor-messages')
      .send(createVisitorMessageDTO)
      .expect(422);

    expect(response.body.message[0]).toBe(
      'botIdentifier must be a hexadecimal number',
    );
  });

  it('/visitor-messages (POST). Can process a visitor message.', async () => {
    const createVisitorMessageDTO: CreateVisitorMessageDTO = {
      message: 'Hello',
      botIdentifier: '5f74865056d7bb000fcd39ff',
    };

    const response = await request(testApp.getHttpServer())
      .post('/api/visitor-messages')
      .send(createVisitorMessageDTO)
      .expect(201);

    expect(response.body.text).not.toBeNull();
    expect(response.body.id).not.toBeNull();
  });
});
