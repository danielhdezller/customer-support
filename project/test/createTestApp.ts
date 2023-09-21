import 'dotenv/config';
import { MongooseModule } from '@nestjs/mongoose';
import { Test } from '@nestjs/testing';
import { configureDefaultValidationPipes } from 'src/app-bootstrap/routing.bootstrap';
import {
  VisitorMessage,
  VisitorMessageSchema,
} from 'src/visitor-message/schemas/visitor-message.schema';
import { VisitorMessageModule } from 'src/visitor-message/visitor-message.module';
import { UltimateModule } from 'src/ultimate/ultimate.module';

const init = async ({ additionalModules = [] }) => {
  const moduleRef = await Test.createTestingModule({
    imports: [
      MongooseModule.forRoot(process.env.MONGODB_URI_TEST),
      MongooseModule.forFeature([
        {
          name: VisitorMessage.name,
          schema: VisitorMessageSchema,
        },
      ]),
      VisitorMessageModule,
      UltimateModule,
      ...additionalModules,
    ],
    providers: [],
  }).compile();

  const app = moduleRef.createNestApplication();
  app.setGlobalPrefix('api');
  configureDefaultValidationPipes(app);

  await app.init();

  return {
    moduleRef,
    app,
  };
};

export default init;
