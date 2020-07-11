import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { UsersModule } from './users/users.module';
import { AuthenticationController } from './authentication/authentication.controller';
import { AuthenticationModule } from './authentication/authentication.module';
import {BcryptFacade} from './authentication/bcrypt.facade';
import { DatabaseModule } from './database/database.module';
import { BcryptModule } from './providers/bcrypt/bcrypt.module';
import { AddressService } from './address/address.service';
import { AddressController } from './address/address.controller';
import { AddressModule } from './address/address.module';
 
@Module({
  imports: [DatabaseModule, UsersModule, AuthenticationModule, BcryptModule, AddressModule, AddressService],
  controllers: [AppController, UsersController, AuthenticationController, AddressController, AddressController],
  providers: [AppService, BcryptFacade, AddressService],
})
export class AppModule {}
