import {
    CanActivate,
    ExecutionContext,
    Injectable,
    UnauthorizedException,
  } from '@nestjs/common';
  import { verify } from 'jsonwebtoken';
  
  export interface CustomRequest extends Request {
    userEmail: string;
  }
  
  @Injectable()
  export class AuthGuard implements CanActivate {
    canActivate(context: ExecutionContext): boolean | Promise<boolean> {
      try {
        const request = context.switchToHttp().getRequest<CustomRequest>();
        const bearerToken = request.headers['authorization'] as
          | string
          | undefined;
  
        const accessToken = bearerToken?.split(' ')[1];
  
        if (!accessToken) {
          throw new UnauthorizedException('User is not authenticated');
        }
  
        const userPayload = verify(accessToken, process.env.JWT_SECRET) as {
          sub: string;
          email: string;
        };
  
        if (!userPayload) {
          throw new UnauthorizedException('User is not authenticated');
        }
  
        request.userEmail = userPayload.email;
  
        return true;
      } catch {
        throw new UnauthorizedException('User is not authenticated');
      }
    }
  }