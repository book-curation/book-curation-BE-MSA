import { NestFactory } from '@nestjs/core';
import { PhraseModule } from './phrase.module';

async function bootstrap() {
  const app = await NestFactory.create(PhraseModule);
  await app.listen(3000);
}
bootstrap();
