import { Body, Controller, Get, Post } from "@nestjs/common";
import { CreateUserDTO } from "../../utils/dto/create-user.dto";

@Controller('users')
export class UserController {

    @Get()
    async getAllUsers() {
        return {
            "fullName": "John Doe",
            "email": "john@gmail.com",
            "password": "df4s64fs4g5e84g6e5sd15gs165h5m;.;sg.s;",
            "birthDate": "1987/08/15",
            "address": "Hell's Kitchen",
            "city": "New York",
            "state": "New York",
            "permission": 1
        }
    }

    @Post('register')
    async createNewUser(@Body() data: CreateUserDTO) {
        return data
    }

}