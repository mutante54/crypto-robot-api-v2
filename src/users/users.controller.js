import { Controller, Dependencies, Bind, Request, Get, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { Roles } from '../auth/roles.decorator';
import { RolesGuard } from '../auth/roles.guard';
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

    @UseGuards(RolesGuard)
    @Roles('admin')
    @Get()
    findAll() {
        return this.usersService.findAll();
    }
}
