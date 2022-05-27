import { Body, Controller, Post } from '@nestjs/common';
import {
  ApplyRateRequestDto,
  ApplyRateResponseDto,
} from './dto/apply-rate.dto';
import { ChargingService } from './charging.service';

@Controller()
export class ChargingController {
  constructor(private readonly chargingService: ChargingService) {}

  @Post('rate')
  applyRate(@Body() { rate, cdr }: ApplyRateRequestDto): ApplyRateResponseDto {
    const energy = this.chargingService.calculateEnergyPrice(
      rate.energy,
      cdr.meterStart,
      cdr.meterStop,
    );

    const time = this.chargingService.calculateTimePrice(
      rate.time,
      cdr.timestampStart,
      cdr.timestampStop,
    );

    const transaction = rate.transaction;

    const overall = Number((time + energy + transaction).toFixed(2));

    return {
      overall,
      components: { time, energy, transaction },
    };
  }
}
