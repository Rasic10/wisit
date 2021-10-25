import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { User } from './entity/User.entity';

export const typeOrmConfig: TypeOrmModuleOptions = {
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "admin",
    database: "wisit",
    synchronize: true,
    logging: false,
    entities: [
       User
    ],
    migrations: [
       "./migration/**/*.ts"
    ],
    subscribers: [
       "./subscriber/**/*.ts"
    ],
    cli: {
       entitiesDir: "./entity",
       migrationsDir: "./migration",
       subscribersDir: "./subscriber"
    }
}