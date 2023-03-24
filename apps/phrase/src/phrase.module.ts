import { Module } from '@nestjs/common';
import { PhraseController } from './phrase.controller';
import { PhraseService } from './phrase.service';

@Module({
  imports: [],
  controllers: [PhraseController],
  providers: [PhraseService],
})
export class PhraseModule {}
