import { Injectable, Dependencies } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
@Dependencies(UsersService, JwtService)
export class AuthService {

    constructor(usersService, jwtService) {
        this.usersService = usersService;
        this.jwtService = jwtService;
    }

    async validateUser(username, pass) {
        const user = await this.usersService.findByUsername(username);
        if (user) {
            if (await bcrypt.compare(pass, user.password)) {
                const { password, ...result } = user;
                return result;
            }
        }
        return null;
    }

    async login(user) {
        const payload = { username: user };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
}
