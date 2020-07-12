import { UserDTO } from "../../users/user.dto"
import { UsersService } from "../../users/users.service"
import { mockUserService } from "../services/user.service.mock"
import { getModelToken } from "@nestjs/mongoose"
import { User } from "../../models/User.schema"
import { mockUserRepository } from "../repositories/user.repository.mock"

export const userFails: UserDTO = {
    username: 'jose',
    password: '1234',
    email: 'jose@gmail.com'
  }
  
 export const userSuccessful: UserDTO = { 
    username: 'jose',
    password: '1234',
    email: 'jose@gmail.com'
  }

 export const userTestProvider = {
    provide: UsersService,
    useValue: mockUserService
  }

export const userTestRepositoryProvider = {
    provide: getModelToken(User.name),
    useValue: mockUserRepository
  }