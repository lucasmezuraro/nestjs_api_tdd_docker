import { Registration } from "../registration";
import { UserDTO } from "src/users/user.dto";

export class CustomerStrategy implements Registration {

    constructor(private readonly userCreateDTO: UserDTO) {}

    save(): string {
        return 'customer registrated';
    }

    instance(): CustomerStrategy {
        return this;
    }

}