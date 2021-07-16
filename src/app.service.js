import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello() {
    return 'Crypto Robot API V2 - v1.0.0';
  }
}
