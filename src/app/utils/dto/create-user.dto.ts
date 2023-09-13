import { IsDateString, IsEmail, IsEnum, IsNotEmpty, IsOptional, IsString, IsStrongPassword } from "class-validator";
import { Permissions } from "../enums/permitions.enum";



export class CreateUserDTO {
    @IsString()
    fullName: string;

    @IsNotEmpty({
        message: "this field cannot be empty"
    })
    @IsString()
    cpf: string;

    @IsNotEmpty({
        message: "this field cannot be empty"
    })
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @IsStrongPassword({
        minLength: 6,
        minUppercase: 1,
        minNumbers: 1,
    })
    password: string;

    @IsOptional()
    @IsDateString()
    birthDate: string;

    @IsString()
    address: string;

    @IsString()
    city: string;

    @IsString()
    state: string;

    @IsEnum(Permissions)
    permission: number;
}
