import { Module } from '@nestjs/common';
import { UltimateService } from './services/ultimate.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  providers: [UltimateService],
  exports: [UltimateService],
})
export class UltimateModule {}
