import { Registration } from "../registration";
import { UserDTO } from "src/users/user.dto";
import { UsersService } from "src/users/users.service";

export class EmployeeStrategy implements Registration {

    constructor(private readonly userCreateDTO: UserDTO) {}

    save(usersService: UsersService): any {
        return 'employee registrated';
    }

}