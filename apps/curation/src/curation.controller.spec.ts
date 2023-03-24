import { Test, TestingModule } from '@nestjs/testing';
import { CurationController } from './curation.controller';
import { CurationService } from './curation.service';

describe('CurationController', () => {
  let curationController: CurationController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [CurationController],
      providers: [CurationService],
    }).compile();

    curationController = app.get<CurationController>(CurationController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(curationController.getHello()).toBe('Hello World!');
    });
  });
});
