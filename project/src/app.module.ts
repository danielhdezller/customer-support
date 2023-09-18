import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { MongooseConfigService } from './mongoose/mongoose.service';
import { VisitorMessageModule } from './visitor-message/visitor-message.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRootAsync({
      useClass: MongooseConfigService,
    }),
    VisitorMessageModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
