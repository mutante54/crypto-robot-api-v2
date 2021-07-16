import { Controller, Dependencies, Bind, Request, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local-auth.guard';

@Controller('auth')
@Dependencies(AuthService)
export class AuthController {
    constructor(authService) {
        this.authService = authService;
    }

    /**
     * Auth User
     * @param {*} req 
     */
    @UseGuards(LocalAuthGuard)
    @Post('login')
    @Bind(Request())
    async login(req) {
        return this.authService.login(req.user);
    }

}
