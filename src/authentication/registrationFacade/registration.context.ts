import { Registration } from "./registration";


export class RegistrationContext {

    constructor(private readonly registration: Registration) {}

    save(): string {
        return this.registration.save();
    }
}