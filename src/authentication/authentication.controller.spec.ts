import { Test, TestingModule } from '@nestjs/testing';
import { AuthenticationController } from './authentication.controller';
import { AuthenticationService } from './authentication.service';
import { UsersService } from '../users/users.service';
import { UserDTO } from '../users/user.dto';

const mockAuthService = ({
  findAll: jest.fn().mockResolvedValue([]),
  create: jest.fn().mockImplementation((user: UserDTO) => { Promise.resolve(user)})
})

const mockUserService = ({
  findAll: jest.fn().mockResolvedValue([]),
  create: jest.fn().mockImplementation((user: UserDTO) => { Promise.resolve(user)})
})

describe('Authentication Controller', () => {
  let controller: AuthenticationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthenticationController],
      providers: [AuthenticationService, UsersService, 
            { 
              provide: AuthenticationService,
              useValue: mockAuthService 
            }, { 
              provide: UsersService,
              useValue: mockUserService 
        }]
    }).compile();

    controller = module.get<AuthenticationController>(AuthenticationController);
  });

  it('should be defined', () => {
      expect(controller).toBeDefined();
    });
});
