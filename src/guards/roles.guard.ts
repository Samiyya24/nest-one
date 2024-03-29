import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { JwtService } from "@nestjs/jwt";
import { Observable } from "rxjs";
import { ROLES_KEY } from "../decorators/roles-auth.decorator";

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private readonly jwtService: JwtService,
    private readonly reflector:Reflector) {}

  canActivate(
    context: ExecutionContext
  ): boolean | Promise<boolean> | Observable<boolean> {
    const requiredRoles = this.reflector.getAllAndOverride<string[]>(
      ROLES_KEY,
      [context.getHandler(), context.getClass()]
    )
    if (!requiredRoles){
      return
    } const req = context.switchToHttp().getRequest();
    console.log(req);
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      throw new UnauthorizedException({
        message: "User avtorizatsiyadan o'tmagan 1",
      });
    }
    const bearer = authHeader.split(" ")[0];
    const token = authHeader.split(" ")[1];
    if (bearer !== "Bearer" || !token) {
      throw new UnauthorizedException({
        message: "User avtorizatsiyadan o'tmagan 2",
      });
    }
    let user: any;
    try {
      user = this.jwtService.verify(token);
    } catch (error) {
      throw new UnauthorizedException({
        message: "User avtorizatsiyadan o'tmagan 3",
      });
    }
    req.user = user;
    console.log(requiredRoles);
    console.log(user);
    const permission = user.roles.some((role:any)=>
      requiredRoles.includes(role.value)
    )

    if(!permission){
      throw new ForbiddenException({
        message: "Sizga ruhsat etilmagan ",
      });
    }
    return true;
  }
}
