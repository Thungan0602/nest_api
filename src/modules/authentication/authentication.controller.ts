import { Body, Controller, Post, Req } from "@nestjs/common";
import { LoginDto } from "./dto/login.dto";
import { AuthenticationService } from "./authentication.service";
import { RegisterDto } from "./dto/register.dto";
import { ForgotPasswordDto } from "./dto/forgot-password.dto";
import { ResetPasswordDto } from "./dto/reset-password.dto";
import { Auth } from "src/common/decorators/auth.decorator";
import { CustomRequest } from "src/common/guards/auth.guard";

@Controller()
export class AuthenticationController {
    constructor(private authService: AuthenticationService) { }

    @Post('/login')
    login(@Body() loginDto: LoginDto) {
        return this.authService.login(loginDto);
    }

    @Post('/register')
    register(@Body() registerDto: RegisterDto) {
        return this.authService.register(registerDto);
    }

    @Post('/forgot-password')
    forgotPassword(@Body() forgotPasswordDto: ForgotPasswordDto) {
        return this.authService.forgotPassword(forgotPasswordDto);
    }

    @Post('/reset-password')
    @Auth()
    resetPassword(
        @Body() resetPasswordDto: ResetPasswordDto,
        @Req() req: CustomRequest,
    ) {
        const userEmail = req.userEmail;
        console.log(userEmail);

        return this.authService.resetPassword(
            userEmail,
            resetPasswordDto,
        );
    }
}