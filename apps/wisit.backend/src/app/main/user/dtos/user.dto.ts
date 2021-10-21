import { ApiProperty } from "@nestjs/swagger";

export class UserDto {
    @ApiProperty()
    userId: number;
    @ApiProperty({
        nullable: true
    })
    username?: string;
    
    @ApiProperty({
        description: 'User email address',
        required: true
      })
    userEmail: string;
    
    @ApiProperty({
        required: true
    })
    userPassword: string;

    @ApiProperty({
        enum: ['Male', 'Famale']
    })
    gender: Gender;

    @ApiProperty({
        enum: ['Admin', 'Moderator', 'User']
    })
    role: UserRole;
}

export enum UserRole {
    Admin = 'Admin',
    Moderator = 'Moderator',
    User = 'User',
}

export enum Gender {
    Male = 'Male',
    Female = 'Female',
}