import { Module } from '@nestjs/common';
import { UsersModule } from '../users/users.module';
import { UsersService } from '../users/users.service';
import { AuthenticationService } from './authentication.service';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from '../models/User.schema';
import {BcryptFacade} from './bcrypt.facade';

@Module({
    imports: [UsersModule, MongooseModule.forFeature([{name: User.name, schema: UserSchema}])],
    providers:[AuthenticationService,UsersService, {
        provide: 'BCRYPT',
        useFactory: () => {return new BcryptFacade()}
      }],
    exports: [AuthenticationService]
})
export class AuthenticationModule {}
