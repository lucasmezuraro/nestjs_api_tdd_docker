import { UsersService } from "src/users/users.service";


export interface Registration {
    save(usersService: UsersService): Promise<any>;
}