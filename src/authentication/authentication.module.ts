import { Module } from '@nestjs/common';
import { UsersModule } from '../users/users.module';
import { UsersService } from '../users/users.service';
import { AuthenticationService } from './authentication.service';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from '../models/User.schema';
import {BcryptFacade} from './bcrypt.facade';
import { JwtStrategy } from './jwt.strategy';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { PassportModule } from '@nestjs/passport';

@Module({
    imports: [
            UsersModule,
            MongooseModule.forFeature([{name: User.name, schema: UserSchema}]),
            PassportModule.register({ defaultStrategy: 'jwt' }), 
            JwtModule.register({
                secret: jwtConstants.secret,
                signOptions: { expiresIn: '7d' },
              })],
    providers:[
        AuthenticationService,
        UsersService, {
            provide: 'BCRYPT',
            useFactory: () => {return new BcryptFacade()}
        }, JwtStrategy],
    exports: [AuthenticationService]
})
export class AuthenticationModule {}
