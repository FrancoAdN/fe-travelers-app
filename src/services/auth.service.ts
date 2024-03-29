import { RegisterDto, CredentialsDto } from '../dtos';
import { BaseRequestService } from './base-request.service';

export class AuthService extends BaseRequestService {
  private static instance: AuthService;
  private static PREFIX = 'auth/';
  constructor() {
    super(`${String(process.env.REACT_APP_BASE_URL)}${AuthService.PREFIX}`);
    if (AuthService.instance === null) AuthService.instance = this;
    return AuthService.instance;
  }

  signUp(registerDto: RegisterDto) {
    return super.post(`auth.signUp`, registerDto);
  }

  signIn(credentials: CredentialsDto) {
    return super.post('auth.signIn', credentials);
  }
}

const authService = new AuthService();
Object.freeze(authService);
export default authService;
