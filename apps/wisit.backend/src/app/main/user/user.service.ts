import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { User } from "../../database/entity/User.entity";
import { AddUserDto } from "./dtos/addUser.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { from } from "rxjs";
import { UserDto } from "./dtos/user.dto";

@Injectable()
export class UserService {
    constructor(@InjectRepository(User) private userRepo: Repository<User>) {}

    async getUsers(): Promise<UserDto[]> {
        return await (await this.userRepo.find()).map(x => ({
            userId: x.id,
            username: x.username,
            email: x.email,
            password: x.password,
            gender: x.gender
        } as UserDto));
    }

    async getUserById(userId: number) {
        return await this.userRepo.findOne(userId);
    }

    async addUser(user: AddUserDto) {
        return await this.userRepo.save(user);
    }
}