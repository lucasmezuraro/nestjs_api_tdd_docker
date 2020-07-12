import { RegistationFacade } from "src/authentication/registrationFacade/registration.facade";
import { registrationContextProvider } from "./registrationContext/registration.context.provider";
import { registrationFactoryProvider } from "./registrationFactory/registration.factory.provider";

export const registrationFacadeProvider = 
    {
        provide: 'REGISTRATION_FACADE',
        useClass: RegistationFacade
    }
