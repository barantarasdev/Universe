import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: '*',
    methods: 'GET',
    preflightContinue: false,
    optionsSuccessStatus: 200,
  });

  await app.listen(3000);
}
bootstrap();
