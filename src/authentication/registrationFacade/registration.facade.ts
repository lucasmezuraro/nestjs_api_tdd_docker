import { UserDTO } from "src/users/user.dto";
import { RegistrationContext } from "./registration.context";
import { RegistrationFactory } from "./registration.factory";
import { Logger, Injectable, Inject } from "@nestjs/common";
import { EmployeeStrategy } from "./strategies/employee.strategy";
import { CompanyStrategy } from "./strategies/company.strategy";
import { CustomerStrategy } from "./strategies/customer.strategy";
import { Registration } from "./registration";
import { UsersService } from "src/users/users.service";

@Injectable()
export class RegistationFacade {


    constructor(
        @Inject('REGISTRATION_CONTEXT') private readonly registrationContext: RegistrationContext, 
        @Inject('REGISTRATION_FACTORY') private readonly registrationFactory: RegistrationFactory) {
        
    }

    create(userDTO: UserDTO): any {
        try {
            this.registrationFactory.handleType(userDTO);
            this.registrationContext.setInstance(this.registrationFactory.getInstance());
            return this.registrationContext.save();
        }catch(err) {
            new Logger('Logg eerr').log(err);
        }
    }


}