import { Registration } from "../registration";
import { UserDTO } from "../../../users/user.dto";
import { UsersService } from "../../../users/users.service";
import { Injectable, Inject } from "@nestjs/common";

@Injectable()
export class CustomerStrategy implements Registration {

    constructor(private readonly userCreateDTO, private readonly usersService: UsersService) {}

    async save(): Promise<any> {
        return await this.usersService.create(this.userCreateDTO);
    }
}