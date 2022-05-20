import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getInfo(): string {
    return 'Energized API: a charging station management system';
  }
}
