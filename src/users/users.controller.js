import { Controller, Bind, Request, Get, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('users')
export class UsersController {

    /**
     * Return a logged user
     * @param {*} req 
     */
    @UseGuards(JwtAuthGuard)
    @Get('logged')
    @Bind(Request())
    getLogged(req) {
        return req.user;
    }
}
