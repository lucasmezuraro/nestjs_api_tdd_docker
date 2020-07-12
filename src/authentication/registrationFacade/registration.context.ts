import { Registration } from "./registration";
import { UserDTO } from "src/users/user.dto";
import { UsersService } from "src/users/users.service";


export class RegistrationContext {
    private registration: Registration;

    setInstance(registration: Registration): void {
        this.registration = registration;
    }

    async save(): Promise<any> {
        return this.registration.save();
    }
}