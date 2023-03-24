import { Test, TestingModule } from '@nestjs/testing';
import { PhraseController } from './phrase.controller';
import { PhraseService } from './phrase.service';

describe('PhraseController', () => {
  let phraseController: PhraseController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [PhraseController],
      providers: [PhraseService],
    }).compile();

    phraseController = app.get<PhraseController>(PhraseController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(phraseController.getHello()).toBe('Hello World!');
    });
  });
});
