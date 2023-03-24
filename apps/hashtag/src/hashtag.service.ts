import { Injectable } from '@nestjs/common';

@Injectable()
export class HashtagService {
  getHello(): string {
    return 'Hello World!';
  }
}
