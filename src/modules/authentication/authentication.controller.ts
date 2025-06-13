import { Body, Controller, Post, Req } from '@nestjs/common';
import { Auth } from 'src/common/decorators/auth.decorator';
import { AuthenticationService } from './authentication.service';
import { ForgotPasswordDto } from './dto/forgot-password.dto';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { ResetPasswordDto } from './dto/reset-password.dto';
import { CustomRequest } from 'src/common/guards/auth.guard';
@Controller('/')
export class AuthenticationController {
  constructor(private readonly authenticationService: AuthenticationService) {}

  @Post('/login')
  login(@Body() loginDto: LoginDto) {
    return this.authenticationService.login(loginDto);
  }

  @Post('/register')
  register(@Body() registerDto: RegisterDto) {
    return this.authenticationService.register(registerDto);
  }

  @Post('/forgot-password')
  forgotPassword(@Body() forgotPasswordDto: ForgotPasswordDto) {
    return this.authenticationService.forgotPassword(forgotPasswordDto);
  }

  @Post('/reset-password')
  @Auth()
  resetPassword(
    @Body() resetPasswordDto: ResetPasswordDto,
    @Req() req: CustomRequest,
  ) {
    const userEmail = req.userEmail;

    return this.authenticationService.resetPassword(
      userEmail,
      resetPasswordDto,
    );
  }
}