import { Injectable } from "@nestjs/common";
import { users } from "../../../db";
import { UserDto } from "./dtos/user.dto";

@Injectable()
export class UserService {
    private users = users;

    getUsers(): UserDto[] {
        return this.users;
    }

    getUserById(userId: number): UserDto {
        return this.users.find(user => {
            return user.userId = userId;
        })
    }
}