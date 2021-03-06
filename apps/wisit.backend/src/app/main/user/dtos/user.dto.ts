import { ApiProperty } from "@nestjs/swagger";
import { Gender } from "../../../database/entity/User.entity";


export class UserDto {
    @ApiProperty()
    userId: number;

    @ApiProperty()
    username: string;
    
    @ApiProperty()
    email: string;
    
    @ApiProperty()
    password: string;

    @ApiProperty({
        enum: Gender
    })
    gender: Gender;
}

