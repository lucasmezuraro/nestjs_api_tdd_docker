import { Module } from "@nestjs/common";
import { registrationFactoryProvider } from "./registration.factory.provider";
import { UsersService } from "src/users/users.service";
import { UsersModule } from "src/users/users.module";

@Module({
    imports: [UsersModule],
    providers: [registrationFactoryProvider, UsersService],
    exports: [registrationFactoryProvider]
})

export class RegistrationFactoryModule {}