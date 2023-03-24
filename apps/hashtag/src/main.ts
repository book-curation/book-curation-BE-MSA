import { NestFactory } from '@nestjs/core';
import { HashtagModule } from './hashtag.module';

async function bootstrap() {
  const app = await NestFactory.create(HashtagModule);
  await app.listen(3000);
}
bootstrap();
