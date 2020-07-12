import { Registration } from "./registration";
import { UsersService } from "src/users/users.service";


export class RegistrationContext {

    constructor(private readonly registration: Registration) {}

    async save(usersService: UsersService): Promise<any> {
        return this.registration.save(usersService);
    }
}