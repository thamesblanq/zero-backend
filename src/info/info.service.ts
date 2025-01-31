import { Injectable } from '@nestjs/common';
import { Info } from './dto/info.dto';

@Injectable()
export class InfoService {
  getInfo(): Info {
    return {
      email: 'obiwulugodswill@gmail.com',
      current_datetime:  new Date().toISOString(),
      github_url: 'https://github.com/thamesblanq/zero-backend',
    };
  }
}
