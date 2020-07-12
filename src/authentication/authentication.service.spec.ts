import { Test, TestingModule } from '@nestjs/testing';
import { AuthenticationService } from './authentication.service';
import { UsersService } from '../users/users.service';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { mockUserService } from '../__mocks__/services/user.service.mock';
import { userFails, userSuccessful, userTestProvider, userTestRepositoryProvider } from '../__mocks__/resources/users.mock';
import { credentials, fake_token } from '../__mocks__/resources/credentials.mock';
import { mockBcryptModule, bcryptTestProvider } from '../__mocks__/resources/bcrypt.mock';
import { mockJwt, jwtProvider } from '../__mocks__/resources/jwt.mock';
import { registrationFacadeTestMock, mockRegistrationFacade } from '../__mocks__/resources/registration.facade.mock';

describe('AuthenticationService', () => {
  let service: AuthenticationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [PassportModule.register({ defaultStrategy: 'jwt' }), 
      JwtModule.register({
          secret: jwtConstants.secret,
          signOptions: { expiresIn: '7d' },
        })],
      providers: [
        AuthenticationService, 
        UsersService,
        userTestRepositoryProvider,
        userTestProvider,
        bcryptTestProvider,
        jwtProvider,
        registrationFacadeTestMock 
      ],
    }).compile();

    service = module.get<AuthenticationService>(AuthenticationService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should be call login method', async() => {
        const a = await service.login(credentials);
        expect(mockUserService.findByUsername).toBeCalledTimes(1);
        expect(mockBcryptModule.compare).toBeCalledTimes(1);
    })


    it('should sign in a user', async() => {
        const sign = await service.login(credentials);
        expect(mockBcryptModule.compare).toBeCalledTimes(1);
        expect(mockJwt.sign).toBeCalledTimes(1);
        expect(sign).toEqual({token: fake_token})
    })
    
      it('should return a user create, when registration facade finish',async () => {
        const facade = await service.register(userSuccessful);
        expect(mockRegistrationFacade.create).toBeCalledTimes(1);
      });
});
