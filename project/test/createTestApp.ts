import { Test } from '@nestjs/testing';
import { configureDefaultValidationPipes } from 'src/app-bootstrap/routing.bootstrap';

const init = async ({ additionalModules = [] }) => {
  const moduleRef = await Test.createTestingModule({
    imports: [...additionalModules],
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
