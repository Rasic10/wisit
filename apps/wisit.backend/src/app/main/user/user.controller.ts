import { Body, Controller, Delete, Get, Param, Post, Put, Query } from "@nestjs/common";
import { ApiBody, ApiQuery } from "@nestjs/swagger";
import { UserDto, UserRole } from "./dtos/user.dto";
import { UserService } from "./user.service";

@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get()
    getUsers(): UserDto[] {
        return this.userService.getUsers();
    }

    @Get("/:userId")
    // getUserById(@Param() params: {userId: number} {
    getUserById(
        @Param('userId') userId: number
    ): UserDto {
        return this.userService.getUserById(userId);
    }

    @Post()
    addUser() {
        return "Added user";
    }

    @Put("/:userId") 
    @ApiBody({type: [UserDto] })
    async updateUser(
        @Param("userId") userId: number,
    ) {
        console.log(userId);
        return "Updated user";
    }

    @Delete("/:userId")
    deleteUser() {
        return "Deleted user";
    }

    @Get("/role")
    @ApiQuery({ name: 'role', enum: UserRole })
    async getUserByRole(@Query('role') role: UserRole = UserRole.User) {
        return 'User role';
    }
}
