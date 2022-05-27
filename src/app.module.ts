import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { ChargingModule } from './charging/charging.module';

@Module({
  imports: [ChargingModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
