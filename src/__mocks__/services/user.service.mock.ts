import { UserDTO } from "src/users/user.dto"
import { CredentialsDTO } from "src/authentication/credentials.dto"


export const mockUserService = ({
    compare: jest.fn().mockImplementation((password: string, storedPassword: string) => { Promise.resolve(true)}),
    findByUsername: jest.fn().mockImplementation((user: UserDTO) => Promise.resolve(user)),
    findOne: jest.fn().mockImplementation((user: UserDTO) => Promise.resolve(user)),
    login: jest.fn().mockImplementation((credentials: CredentialsDTO) => { Promise.resolve(true)}),
    register: jest.fn().mockImplementation((user: UserDTO) => Promise.resolve(user))
  })