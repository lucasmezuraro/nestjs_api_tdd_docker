import { UserDTO } from "src/users/user.dto";
import { RegistrationContext } from "./registration.context";
import { RegistrationFactory } from "./registration.factory";
import { Logger } from "@nestjs/common";
import { EmployeeStrategy } from "./strategies/employee.strategy";
import { CompanyStrategy } from "./strategies/company.strategy";
import { CustomerStrategy } from "./strategies/customer.strategy";
import { Registration } from "./registration";
import { UsersService } from "src/users/users.service";

export class RegistationFacade {

    private readonly registrationContext: RegistrationContext;
    private readonly registrationFactory: RegistrationFactory;

    constructor(private readonly userCreateDTO: UserDTO) {
        this.registrationFactory =  new RegistrationFactory(userCreateDTO);
        this.registrationContext = new RegistrationContext(this.registrationFactory.getInstance());
    }

    create(usersService: UsersService): any {
        try {
            return this.registrationContext.save(usersService);
        }catch(err) {
            new Logger('Logg eerr').log(err);
        }
    }


}