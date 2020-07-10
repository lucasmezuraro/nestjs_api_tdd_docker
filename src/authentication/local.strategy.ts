import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthenticationService } from './authentication.service';
import { CredentialsDTO } from './credentials.dto';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthenticationService) {
    super();
  }

  async validate(credentialsDTO: CredentialsDTO): Promise<any> {
    const user = await this.authService.login(credentialsDTO);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}