import { Test, TestingModule } from '@nestjs/testing';
import { ChargingService } from './charging.service';
import { ChargingController } from './charging.controller';
import {
  ApplyRateRequestDto,
  ApplyRateResponseDto,
} from './dto/apply-rate.dto';

describe('ChargingController', () => {
  let controller: ChargingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ChargingController],
      providers: [ChargingService],
    }).compile();

    controller = module.get<ChargingController>(ChargingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('applyRate()', () => {
    it('given a valid request, returns a correct response', () => {
      const request: ApplyRateRequestDto = {
        rate: { energy: 0.3, time: 2, transaction: 1 },
        cdr: {
          meterStart: 1204307,
          timestampStart: '2021-04-05T10:04:00Z',
          meterStop: 1215230,
          timestampStop: '2021-04-05T11:27:00Z',
        },
      };

      const response = controller.applyRate(request);

      expect(response).toStrictEqual<ApplyRateResponseDto>({
        overall: 7.04,
        components: { energy: 3.277, time: 2.767, transaction: 1 },
      });
    });
  });
});
