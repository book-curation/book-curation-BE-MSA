import { Controller, Get } from '@nestjs/common';
import { CurationService } from './curation.service';

@Controller()
export class CurationController {
  constructor(private readonly curationService: CurationService) {}

  @Get()
  getHello(): string {
    return this.curationService.getHello();
  }
}
