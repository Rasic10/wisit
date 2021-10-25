import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { ApiBody } from "@nestjs/swagger";
import { AddUserDto } from "./dtos/addUser.dto";
import { UserDto } from "./dtos/user.dto";
import { UserService } from "./user.service";

@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get()
    getUsers(): Promise<UserDto[]> {
        return this.userService.getUsers();
    }

    @Get("/:userId")
    // getUserById(@Param() params: {userId: number} {
    getUserById(
        @Param('userId') userId: number
    ) {
        return this.userService.getUserById(userId);
    }

    @Post()
    addUser(@Body() user: AddUserDto) {
        return this.userService.addUser(user);
    }

    @Put("/:userId") 
    @ApiBody({type: [AddUserDto] })
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

    // @Get("/role")
    // @ApiQuery({ name: 'role', enum: UserRole })
    // async getUserByRole(@Query('role') role: UserRole = UserRole.User) {
    //     return 'User role';
    // }
}
