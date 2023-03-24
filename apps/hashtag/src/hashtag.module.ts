import { Module } from '@nestjs/common';
import { HashtagController } from './hashtag.controller';
import { HashtagService } from './hashtag.service';

@Module({
  imports: [],
  controllers: [HashtagController],
  providers: [HashtagService],
})
export class HashtagModule {}
