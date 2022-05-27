import { Test, TestingModule } from '@nestjs/testing';
import { ChargingService } from './charging.service';

describe('ChargingService', () => {
  let service: ChargingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ChargingService],
    }).compile();

    service = module.get<ChargingService>(ChargingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('calculateEnergyPrice()', () => {
    it('given valid parameters, returns the energy price', () => {
      const energy = service.calculateEnergyPrice(0.3, 1204307, 1215230);
      expect(energy).toEqual(3.277);
    });
  });

  describe('calculateTimePrice()', () => {
    it('given valid parameters, returns the time price', () => {
      const time = service.calculateTimePrice(
        2,
        '2021-04-05T10:04:00Z',
        '2021-04-05T11:27:00Z',
      );

      expect(time).toEqual(2.767);
    });
  });
});
