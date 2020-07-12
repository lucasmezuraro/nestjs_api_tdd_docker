import { Registration } from "../registration";
import { UserDTO } from "../../../users/user.dto";
import { UsersService } from "../../../users/users.service";
import { Injectable } from "@nestjs/common";

@Injectable()
export class EmployeeStrategy implements Registration {

    constructor(private readonly userCreateDTO: UserDTO,private readonly usersService?: UsersService) {}

    async save(): Promise<any> {
        return 'employee registrated '+ await this.usersService.findByUsername(this.userCreateDTO.username);
    }

}