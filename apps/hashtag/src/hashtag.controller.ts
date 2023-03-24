import { Controller, Get } from '@nestjs/common';
import { HashtagService } from './hashtag.service';

@Controller()
export class HashtagController {
  constructor(private readonly hashtagService: HashtagService) {}

  @Get()
  getHello(): string {
    return this.hashtagService.getHello();
  }
}
