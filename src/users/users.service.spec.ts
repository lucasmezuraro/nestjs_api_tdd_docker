import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import { UserDTO } from './user.dto';
import { getModelToken } from '@nestjs/mongoose';
import { User } from '../models/User.schema';

const mockUserRepo = ({
  find: jest.fn().mockImplementation(() => {Promise.resolve([])}),
  create: jest.fn().mockImplementation((user: UserDTO) => {Promise.resolve(user)}),
  hash: jest.fn().mockResolvedValue("abc")
})

const user: UserDTO = {
  username: 'lucas',
  email: "lucas@gmail.com",
  password: "1234"
}

describe('UsersService', () => {
  let service: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersService, {
        provide: getModelToken(User.name),
        useValue: mockUserRepo
      }],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should find all users', async () => {
       const find = await service.findAll();
       expect(mockUserRepo.find).toBeCalledTimes(1);
    });

    it('must create a user', async () => {
        const createUser = await service.create(user)
        expect(mockUserRepo.create).toBeCalledTimes(1);

    });
});
