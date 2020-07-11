import { IsString } from "class-validator";

export class CredentialsDTO {

    @IsString()
    username: string;

    @IsString()
    password: string;
}