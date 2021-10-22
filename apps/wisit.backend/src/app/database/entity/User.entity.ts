import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Gender } from "../../main/user/dtos/user.dto";

@Entity()
export class User {

    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column()
    username: string;

    @Column()
    email: string;

    @Column()
    password: number;

    @Column({
        type: "enum",
        enum: Gender,
        default: Gender.Male
    })
    gender: Gender;
}
