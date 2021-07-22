import { Controller, Dependencies, Bind, Request, Get, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { UsersService } from './users.service';

@Controller('users')
@Dependencies(UsersService)
export class UsersController {

    constructor(usersService) {
        this.usersService = usersService;
    }

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

    @Get()
    findAll() {
        return this.usersService.findAll();
    }
}
