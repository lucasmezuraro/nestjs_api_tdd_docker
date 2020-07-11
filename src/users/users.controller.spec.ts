import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UserDTO } from './user.dto';
import { UsersService } from './users.service';

const mockUsersService = ({
  findAll: jest.fn().mockResolvedValue([]),
  create: jest.fn().mockImplementation((user: UserDTO) => { Promise.resolve(user)})
})

const user: UserDTO = {
  username: 'lucas',
  email: "lucas@gmail.com",
  password: "1234"
}

describe('Users Controller', () => {
  let controller: UsersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [{
        provide: UsersService,
        useValue: mockUsersService
      }]
    }).compile();

    controller = module.get<UsersController>(UsersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

    it('should find all users', async() => {
       const a = await controller.findAll();
       expect(mockUsersService.findAll).toBeCalledTimes(1);
    });

      it('should be create a user', async() => {
        const createUser = controller.create(user);
      });

});
