import { IsEmail, IsEnum, IsNotEmpty, IsString } from "class-validator";
import { Permissions } from "../enums/permitions.enum";
import { Specialty } from "../enums/specialty.enum";

export class CreateMedDTO {

    @IsNotEmpty({
        message: "this field cannot be empty"
    })
    @IsString()
    med_register: string;

    @IsString()
    fullName: string;

    @IsNotEmpty({ message: "this field cannot be empty" })
    @IsEmail()
    email: string;

    @IsNotEmpty({ message: "this field cannot be empty" })
    @IsString()
    password: string;

    @IsString()
    address: string;

    @IsString()
    city: string;
    
    @IsEnum(Permissions)
    permission: number;

    @IsEnum(Specialty)
    specialty: number;
}