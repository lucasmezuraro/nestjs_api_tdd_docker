import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersController } from './users/users.controller';
import { UsersModule } from './users/users.module';
import { AuthenticationService } from './authentication/authentication.service';
import { AuthenticationController } from './authentication/authentication.controller';
import { AuthenticationModule } from './authentication/authentication.module';
import bcryptjs from 'bcryptjs';
import {BcryptFacade} from './authentication/bcrypt.facade';

@Module({
  imports: [MongooseModule.forRoot('mongodb://db:27017/pizz_finder_api', {
    authSource: 'admin',
    user: 'root',
    pass: 'rootpassword'
  }), UsersModule, AuthenticationModule],
  controllers: [AppController, UsersController, AuthenticationController],
  providers: [AppService, {
    provide: 'BCRYPT',
    useFactory: () => {return new BcryptFacade()}
  }],
})
export class AppModule {}
