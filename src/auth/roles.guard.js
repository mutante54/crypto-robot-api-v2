import { Injectable, Dependencies } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

@Injectable()
@Dependencies(Reflector)
export class RolesGuard {
    constructor(reflector) {
        this.reflector = reflector;
    }

    canActivate(context) {
        const roles = this.reflector.get('roles', context.getHandler());
        if (!roles) {
            return true;
        }
        const request = context.switchToHttp().getRequest();
        const user = request.user;
        return this.matchRoles(roles, user.roles);
    }

    /**
     * User roles validation (controller handler x user roles).
     * Returns TRUE if user contain one or more roles required by roles list. Otherwise, returns FALSE.
     * @param {*} roles 
     * @param {*} userRoles 
     */
    matchRoles(roles, userRoles) {
        userRoles.forEach(role => {
            if (roles.include(role)) {
                return true;
            }
        });

        return false;
    }
}