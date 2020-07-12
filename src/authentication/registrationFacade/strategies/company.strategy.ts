import { Registration } from "../registration";
import { UserDTO } from "../../../users/user.dto";
import { UsersService } from "../../../users/users.service";

export class CompanyStrategy implements Registration {

    constructor(private readonly userCreateDTO: UserDTO, private readonly usersService: UsersService) {}

    async save(): Promise<any> {
        return await 'company registrated';
    }
}