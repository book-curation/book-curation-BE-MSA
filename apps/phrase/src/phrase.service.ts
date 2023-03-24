import { Injectable } from '@nestjs/common';

@Injectable()
export class PhraseService {
  getHello(): string {
    return 'Hello World!';
  }
}
