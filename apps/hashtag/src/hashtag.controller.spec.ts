import { Test, TestingModule } from '@nestjs/testing';
import { HashtagController } from './hashtag.controller';
import { HashtagService } from './hashtag.service';

describe('HashtagController', () => {
  let hashtagController: HashtagController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [HashtagController],
      providers: [HashtagService],
    }).compile();

    hashtagController = app.get<HashtagController>(HashtagController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(hashtagController.getHello()).toBe('Hello World!');
    });
  });
});
