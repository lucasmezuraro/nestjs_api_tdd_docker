import {IsString, IsOptional, IsObject} from 'class-validator';


export class UserDTO {

    @IsString()
    username: string;

    @IsString()
    email: string;

    @IsString()
    password: string;

    @IsString()
    @IsOptional()
    type?: string;

    
}