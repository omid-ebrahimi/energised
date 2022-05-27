import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const validationPipe = new ValidationPipe({
    stopAtFirstError: true,
    transform: true,
  });
  app.useGlobalPipes(validationPipe);

  await app.listen(3000);
}
bootstrap().then();
