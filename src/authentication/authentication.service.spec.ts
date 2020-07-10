import { Test, TestingModule } from '@nestjs/testing';
import { AuthenticationService } from './authentication.service';
import { UsersService } from '../users/users.service';
import { getModelToken } from '@nestjs/mongoose';
import {User} from '../models/User.schema';
import { UserDTO } from '../users/user.dto';
import { CredentialsDTO } from './credentials.dto';
import { Logger, HttpException, HttpStatus } from '@nestjs/common';
import bcryptjs from 'bcryptjs';


const userFails: UserDTO = {
  username: 'jose',
  password: '1234',
  email: 'jose@gmail.com'
}

const userSuccessful: UserDTO = { 
  username: 'jose',
  password: '1234',
  email: 'jose@gmail.com'
}

const mockUserRepository = ({
  findByUsername: jest.fn().mockResolvedValue('lucas'),
})

const mockUserService = ({
  compare: jest.fn().mockImplementation((password: string, storedPassword: string) => { Promise.resolve(true)}),
  findByUsername: jest.fn().mockImplementation((user: UserDTO) => Promise.resolve(user)),
  findOne: jest.fn().mockImplementation((user: UserDTO) => Promise.resolve(user)),
  login: jest.fn().mockImplementation((credentials: CredentialsDTO) => { Promise.resolve(true)}),
  register: jest.fn().mockImplementation((user: UserDTO) => Promise.resolve(user))
})

const mockBcryptModule =({
  compare: jest.fn().mockImplementation((s: string, hash: string) => Promise.resolve(true))
});

const credentials : CredentialsDTO = {
  username: 'jose',
  password: '1234'
}



describe('AuthenticationService', () => {
  let service: AuthenticationService;
  const log: Logger = new Logger('Auth test');

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuthenticationService, UsersService,
      {
        provide: getModelToken(User.name),
        useValue: mockUserRepository
      },
      {
        provide: UsersService,
        useValue: mockUserService
      },
      {
        provide: 'BCRYPT',
        useValue: mockBcryptModule
      }, 
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
        expect(a).toEqual(userFails.username);
    })

    it("should call register method and will must fail", async() => {
      expect(async() => await service.register(userFails)).rejects.toThrow();
      expect(mockUserService.findByUsername).toBeCalledTimes(1);
      expect(mockUserService.findByUsername).toBeCalledWith(userSuccessful.username);
    }) 
    
    it("shouldn't register a user, username is already taken", async() => {
        expect(async() => await service.register(userFails))
        .rejects
        .toThrowError('username is already taken'); 
    }); 
});
