import { BcryptFacade } from "src/authentication/bcrypt.facade";

export const bcryptProvider = [
    {
        provide: 'BCRYPT',
        useClass: BcryptFacade
    }
]