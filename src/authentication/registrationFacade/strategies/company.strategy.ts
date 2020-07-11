import { Registration } from "../registration";
import { UserDTO } from "src/users/user.dto";

export class CompanyStrategy implements Registration {

    constructor(private readonly userCreateDTO: UserDTO) {}

    save(): string {
        return 'company registrated';
    }

    instance(): CompanyStrategy {
        return this;
    }
}