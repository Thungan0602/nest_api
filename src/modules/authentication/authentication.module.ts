import { Module } from "@nestjs/common";
import { AuthenticationController } from "./authentication.controller";
import { AuthenticationService } from "./authentication.service";

@Module({
    controllers: [AuthenticationController],
    providers: [AuthenticationService],
  })
  export class AuthenticationModule {}