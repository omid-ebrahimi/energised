import { Type } from 'class-transformer';
import {
  IsDateString,
  IsDefined,
  IsNotEmptyObject,
  IsNumber,
  ValidateNested,
} from 'class-validator';

class Rate {
  @IsDefined()
  @IsNumber()
  energy: number; // energy rate per kWh

  @IsDefined()
  @IsNumber()
  time: number; // time rate per hour

  @IsDefined()
  @IsNumber()
  transaction: number; // transaction fee
}

class ChargeDetailRecord {
  @IsDefined()
  @IsNumber()
  meterStart: number; // in Wh

  @IsDefined()
  @IsDateString()
  timestampStart: string;

  @IsDefined()
  @IsNumber()
  meterStop: number;

  @IsDefined()
  @IsDateString()
  timestampStop: string; // in Wh
}

export class ApplyRateRequestDto {
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => Rate)
  rate: Rate;

  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => ChargeDetailRecord)
  cdr: ChargeDetailRecord;
}

export class ApplyRateResponseDto {
  overall: number;
  components: {
    energy: number;
    time: number;
    transaction: number;
  };
}
