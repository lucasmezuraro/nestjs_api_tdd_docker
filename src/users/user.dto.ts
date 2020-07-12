import {IsString, IsOptional, IsObject} from 'class-validator';
import { Address } from 'src/interfaces/address.interface';


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

    @IsObject()
    @IsOptional()
    address?: Address;
}