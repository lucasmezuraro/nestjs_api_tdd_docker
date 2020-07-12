import { Registration } from "../registration";
import { UserDTO } from "src/users/user.dto";
import { UsersService } from "src/users/users.service";
import { Injectable, Inject } from "@nestjs/common";

@Injectable()
export class CustomerStrategy implements Registration {

    constructor(private readonly userCreateDTO) {}

    async save(usersService: UsersService): Promise<any> {
        return await usersService.create(this.userCreateDTO);
    }
}