import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersController } from './users/users.controller';
import { UsersModule } from './users/users.module';
import { AuthenticationController } from './authentication/authentication.controller';
import { AuthenticationModule } from './authentication/authentication.module';
import {BcryptFacade} from './authentication/bcrypt.facade';
import { DatabaseModule } from './database/database.module';
 
@Module({
  imports: [DatabaseModule, UsersModule, AuthenticationModule],
  controllers: [AppController, UsersController, AuthenticationController],
  providers: [AppService, {
    provide: 'BCRYPT',
    useFactory: () => {return new BcryptFacade()}
  }],
})
export class AppModule {}
