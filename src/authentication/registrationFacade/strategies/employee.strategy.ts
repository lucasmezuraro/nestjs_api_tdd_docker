import { Registration } from "../registration";
import { UserDTO } from "src/users/user.dto";

export class EmployeeStrategy implements Registration {

    constructor(private readonly userCreateDTO: UserDTO) {}

    save(): any {
        return 'employee registrated';
    }

    instance(): EmployeeStrategy {
        return this;
    }

}