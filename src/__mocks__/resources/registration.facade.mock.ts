import { userSuccessful } from "./users.mock"

export const mockRegistrationFacade = ({
    create: jest.fn().mockImplementation((userDto: any) => {return userSuccessful })
})

export const registrationFacadeTestMock = {
    provide: 'REGISTRATION_FACADE',
    useValue: mockRegistrationFacade
}