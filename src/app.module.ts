import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forRoot('mongodb://db:27017/pizz_finder_api', {
    authSource: 'admin',
    user: 'root',
    pass: 'rootpassword'
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
