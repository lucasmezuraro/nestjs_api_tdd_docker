import { RegistrationFactory } from "src/authentication/registrationFacade/registration.factory";

export const registrationFactoryProvider = {
    provide: 'REGISTRATION_FACTORY',
    useClass: RegistrationFactory
}