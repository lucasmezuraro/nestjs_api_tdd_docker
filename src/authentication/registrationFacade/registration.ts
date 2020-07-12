import { UsersService } from "src/users/users.service";
import { UserDTO } from "src/users/user.dto";

export interface Registration {
    save(): Promise<any>;
}