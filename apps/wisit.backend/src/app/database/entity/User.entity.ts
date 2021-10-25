import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

export enum Gender {
    Male = "Male",
    Female = "Female"
}

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column({
        type: 'enum',
        enum: Gender,
        default: null
    })
    gender?: Gender;
}

export enum UserRole {
    Admin = "Admin",
    Moderator = "Moderator",
    User = "User"
}
