import { Module } from '@nestjs/common';
import { ChargingService } from './charging.service';
import { ChargingController } from './charging.controller';

@Module({
  controllers: [ChargingController],
  providers: [ChargingService],
})
export class ChargingModule {}
