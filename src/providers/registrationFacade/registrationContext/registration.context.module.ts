import { Module } from "@nestjs/common";
import { registrationContextProvider } from "./registration.context.provider";

@Module({
    providers: [registrationContextProvider],
    exports: [registrationContextProvider] 
})

export class RegistrationContextModule {}