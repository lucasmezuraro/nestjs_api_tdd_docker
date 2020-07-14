import { UserDTO } from "../../users/user.dto";
import { Registration } from "./registration";
import { EmployeeStrategy } from "./strategies/employee.strategy";
import { CompanyStrategy } from "./strategies/company.strategy";
import { CustomerStrategy } from "./strategies/customer.strategy";
import { UsersService } from "../../users/users.service";
import { Logger, Injectable } from "@nestjs/common";
import { AddressService } from "src/address/address.service";

@Injectable()
export class RegistrationFactory {
   
    private userCreateDTO: UserDTO;

    constructor(private readonly usersService: UsersService, private readonly addressService: AddressService) {

    }

    handleType(userDTO: UserDTO): void {
        this.userCreateDTO = userDTO;
    }

    getInstance(): Registration {
        
        switch(this.userCreateDTO.type) {
            case 'employee':
                return new EmployeeStrategy(this.userCreateDTO, this.usersService);
            case 'company':
                return new CompanyStrategy(this.userCreateDTO, this.usersService);
            case 'customer':
                return new CustomerStrategy(this.userCreateDTO, this.usersService);
            default:
                throw new Error('type not defined');
        }
    }
}