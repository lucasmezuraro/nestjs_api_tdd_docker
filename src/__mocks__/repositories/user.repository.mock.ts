import { UserDTO } from "src/users/user.dto"

export const mockUserRepository = ({
    findByUsername: jest.fn().mockResolvedValue('lucas'),
})

export const mockUserRepo = ({
    find: jest.fn().mockImplementation(() => {Promise.resolve([])}),
    create: jest.fn().mockImplementation((user: UserDTO) => {Promise.resolve(user)}),
    hash: jest.fn().mockResolvedValue("abc"),
    findOne: jest.fn().mockResolvedValue(null),
  })