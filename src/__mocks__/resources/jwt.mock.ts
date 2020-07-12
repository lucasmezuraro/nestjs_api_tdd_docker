import { fake_token } from "./credentials.mock"
import { JwtService } from "@nestjs/jwt"

export const mockJwt = ({
    sign: jest.fn().mockImplementation((payload: any) => {return fake_token })
})

export const jwtProvider = {
    provide: JwtService,
    useValue: mockJwt
}