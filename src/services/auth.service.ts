import { RegisterDto, CredentialsDto } from '../dtos';

export class AuthService {
  private static instance: AuthService;

  constructor() {
    if (AuthService.instance === null) AuthService.instance = this;
    return AuthService.instance;
  }

  signUp(registerDto: RegisterDto) {
    console.log(registerDto);
  }

  signIn(credentials: CredentialsDto) {
    console.log(credentials);
  }
}

const authService = new AuthService();
Object.freeze(authService);
export default authService;
