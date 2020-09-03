import { Controller, Post, Body } from '@nestjs/common';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {

  constructor(
    private authService: AuthService,
  ) {}

  @Post('/signup')
  async signUp(
    @Body() authcredentialsDto: AuthCredentialsDto): Promise<void> {
    return this.authService.signup(authcredentialsDto)
  }
}


// "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})"