import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common'

@Injectable()
export class AccessControlGuard implements CanActivate {

    hasRole(): boolean {
        //check if req.user has the needed role

        return true
    }

    isOwn(): boolean {
        //check if requested resorce belongs to this req.user

        //if user has admin role, return true

        return true
    }

    canActivate(context: ExecutionContext,): boolean | Promise<boolean> {
        const req = context.switchToHttp().getRequest()
        console.log(req.user)
        return false
    }
}