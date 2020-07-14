import { Module } from "@nestjs/common";
import { registrationFactoryProvider } from "./registration.factory.provider";
import { UsersService } from "src/users/users.service";
import { UsersModule } from "src/users/users.module";
import { AddressModule } from "src/address/address.module";
import { AddressService } from "src/address/address.service";

@Module({
    imports: [UsersModule, AddressModule],
    providers: [registrationFactoryProvider, UsersService, AddressService],
    exports: [registrationFactoryProvider]
})

export class RegistrationFactoryModule {}