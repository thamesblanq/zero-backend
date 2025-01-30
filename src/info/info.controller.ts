import { Controller, Get } from '@nestjs/common';
import { InfoService } from './info.service';
import { Info } from './dto/info.dto';

@Controller('info')
export class InfoController {
  constructor(private readonly infoService: InfoService) {}

  @Get()
  getInfo(): Info {
    return this.infoService.getInfo();
  }
}
