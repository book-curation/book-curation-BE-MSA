import { Controller, Get } from '@nestjs/common';
import { PhraseService } from './phrase.service';

@Controller()
export class PhraseController {
  constructor(private readonly phraseService: PhraseService) {}

  @Get()
  getHello(): string {
    return this.phraseService.getHello();
  }
}
