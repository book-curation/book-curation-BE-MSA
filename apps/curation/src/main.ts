import { NestFactory } from '@nestjs/core';
import { CurationModule } from './curation.module';

async function bootstrap() {
  const app = await NestFactory.create(CurationModule);
  await app.listen(3000);
}
bootstrap();
