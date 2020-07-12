import { RegistrationContext } from "src/authentication/registrationFacade/registration.context";

export const registrationContextProvider = {
        provide: 'REGISTRATION_CONTEXT',
        useClass: RegistrationContext
    }
