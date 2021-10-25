import { ApiProperty } from "@nestjs/swagger";
import { Gender } from "../../../database/entity/User.entity";

export class AddUserDto {
    @ApiProperty({
        required: true
    })
    username: string;
    
    @ApiProperty({
        description: 'User email address',
        required: true
      })
    email: string;
    
    @ApiProperty({
        required: true
    })
    password: string;

    @ApiProperty({
        enum: Gender
    })
    gender: Gender;
}

