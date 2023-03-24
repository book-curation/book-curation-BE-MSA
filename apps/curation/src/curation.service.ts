import { Injectable } from '@nestjs/common';

@Injectable()
export class CurationService {
  getHello(): string {
    return 'Hello World!';
  }
}
