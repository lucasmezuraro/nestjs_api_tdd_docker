import { UserDTO } from "src/users/user.dto";
import { RegistrationContext } from "./registration.context";
import { RegistrationFactory } from "./registration.factory";
import { Logger } from "@nestjs/common";
import { EmployeeStrategy } from "./strategies/employee.strategy";
import { CompanyStrategy } from "./strategies/company.strategy";
import { CustomerStrategy } from "./strategies/customer.strategy";
import { Registration } from "./registration";

export class RegistationFacade {

    private readonly registrationContext: RegistrationContext;
    private readonly registrationFactory: RegistrationFactory;

    constructor(private readonly userCreateDTO: UserDTO) {
        this.registrationFactory =  new RegistrationFactory(userCreateDTO);
        const type: Registration = this.registrationFactory.getInstance();
        console.log(type);
        this.registrationContext = new RegistrationContext(type);
    }

    create(): any {
        new Logger('SHOW').log(this.registrationContext.save());
        return this.registrationContext.save();
    }


}