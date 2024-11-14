import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

interface LoginData {
  identifier: string;
  password: string;
}
interface RegisterData {
  username: string;
  email: string;
  password: string;
}

@Injectable({ providedIn: 'root' })
export class AuthViewApiService {
  constructor(private readonly http: HttpService) {}

  public loginUser(loginData: LoginData) {
    return this.http.post('api/auth/local', loginData);
  }

  public registerUser(registerData: RegisterData) {
    return this.http.post('api/auth/local/register', registerData);
  }
}
