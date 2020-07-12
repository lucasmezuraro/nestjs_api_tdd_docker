import { Registration } from "../registration";
import { UserDTO } from "src/users/user.dto";
import { UsersService } from "src/users/users.service";

export class CompanyStrategy implements Registration {

    constructor(private readonly userCreateDTO: UserDTO) {}

    async save(usersService: UsersService): Promise<any> {
        return await 'company registrated';
    }
}