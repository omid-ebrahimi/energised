import * as request from 'supertest';
import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from '../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Energized API: a charging station management system');
  });

  it('/rate (POST)', () => {
    const requestData = {
      rate: { energy: 0.3, time: 2, transaction: 1 },
      cdr: {
        meterStart: 1204307,
        timestampStart: '2021-04-05T10:04:00Z',
        meterStop: 1215230,
        timestampStop: '2021-04-05T11:27:00Z',
      },
    };

    return request(app.getHttpServer())
      .post('/rate')
      .send(requestData)
      .expect(201)
      .expect({
        overall: 7.04,
        components: { energy: 3.277, time: 2.767, transaction: 1 },
      });
  });
});
