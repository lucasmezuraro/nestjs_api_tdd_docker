import { Module } from "@nestjs/common";
import { registrationFacadeProvider } from "./registration.facade.provider";
import { registrationContextProvider } from "./registrationContext/registration.context.provider";
import { RegistrationFactoryModule } from "./registrationFactory/registration.factory.module";
import { RegistrationContextModule } from "./registrationContext/registration.context.module";

@Module({
    imports: [RegistrationFactoryModule, RegistrationContextModule],
    providers: [registrationContextProvider, registrationFacadeProvider],
    exports: [registrationFacadeProvider] 
})

export class RegistrationFacadeModule {}