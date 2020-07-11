/* eslint-disable @typescript-eslint/no-var-requires */
import { Injectable, HttpException, HttpStatus, Logger, Inject } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { CredentialsDTO } from './credentials.dto';
import { UserDTO } from '../users/user.dto';
import { JwtService } from '@nestjs/jwt';
import { RegistationFacade } from './registrationFacade/registration.facade';




export interface Bcrypt {
    compare: (s: string, hash: string) => string;
} 

@Injectable()
export class AuthenticationService {

    constructor(private readonly usersService: UsersService, 
        @Inject('BCRYPT') private bcryptjs: Bcrypt,
        private jwtService: JwtService){ 
    }

    async login(creditialsDTO: CredentialsDTO): Promise<any> {
        try {
            const user = await this.usersService.findByUsername(creditialsDTO.username);
            if (user) {
                const isMatching = await this.bcryptjs.compare(creditialsDTO.password, user.password);
                if (!isMatching) {
                    throw new HttpException('Wrong credentials provided', HttpStatus.BAD_REQUEST); 
                }
                
                return {token: this.jwtService.sign({userId: user.id, username: user.username}) }
            }else {
                throw new HttpException("user not found", HttpStatus.UNAUTHORIZED);
            }
        }catch(err) {
            return err;
        }
    }

    async register(userDTO: UserDTO): Promise<any> {
        
       /*  const user = await this.usersService.findByUsername(userDTO.username)
        if (!user) {
            return await this.usersService.create(userDTO); 
        } */

        return new RegistationFacade(userDTO).create();
        //throw new HttpException('username is already taken', HttpStatus.BAD_REQUEST)
        
    }
}
