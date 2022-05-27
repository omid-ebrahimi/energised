import { Injectable } from '@nestjs/common';

@Injectable()
export class ChargingService {
  calculateEnergyPrice(
    energyRate: number,
    meterStart: number,
    meterStop: number,
  ): number {
    const energy = energyRate * ((meterStop - meterStart) / 1000);
    return Number(energy.toFixed(3));
  }

  calculateTimePrice(
    timeRate: number,
    timestampStart: string,
    timestampStop: string,
  ): number {
    const start = new Date(timestampStart).getTime();
    const stop = new Date(timestampStop).getTime();
    const time = timeRate * ((stop - start) / (3600 * 1000));
    return Number(time.toFixed(3));
  }
}
