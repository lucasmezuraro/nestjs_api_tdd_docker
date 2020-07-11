import { UserDTO } from "src/users/user.dto";
import { Registration } from "./registration";
import { EmployeeStrategy } from "./strategies/employee.strategy";
import { CompanyStrategy } from "./strategies/company.strategy";
import { CustomerStrategy } from "./strategies/customer.strategy";

export class RegistrationFactory {

    constructor(private readonly userCreateDTO: UserDTO) {}

    getInstance(): Registration {
        switch(this.userCreateDTO.type) {
            case 'employee':
                return new EmployeeStrategy(this.userCreateDTO);
            case 'company':
                return new CompanyStrategy(this.userCreateDTO);
            case 'customer':
                return new CustomerStrategy(this.userCreateDTO);
            default:
                throw new Error('type not defined');
        }
    }
}