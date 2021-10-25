import { Gender, UserRole } from "./app/database/entity/User.entity";

export const users = [
    {
        userId: 1,
        username: 'Admin',
        userEmail: 'admin@inssio.com',
        userPassword: 'solut10nS!',
        gender: Gender.Male,
        role: UserRole.Admin
    },
    {
        userId: 2,
        username: 'Moderator',
        userEmail: 'admin@inssio.com',
        userPassword: 'solut10nS!',
        gender: Gender.Female,
        role: UserRole.Moderator
    },
    {
        userId: 3,
        username: 'User',
        userEmail: 'admin@inssio.com',
        userPassword: 'solut10nS!',
        gender: Gender.Male,
        role: UserRole.User
    }
]