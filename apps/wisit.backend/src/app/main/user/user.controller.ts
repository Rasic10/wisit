import { Controller, Delete, Get, Post, Put } from "@nestjs/common";

@Controller('users')
export class UserController {
    @Get()
    getUsers() {
        return 'All users';
    }

    @Get("/:userId")
    getUserById() {
        return "User by id";
    }

    @Post()
    addUser() {
        return "Added user";
    }

    @Put("/:userId") 
    updateUser() {
        return "Updated user";
    }

    @Delete("/:userId")
    deleteUser() {
        return "Deleted user";
    }
}