import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';
import { AuthViewApiService } from '../../auth-view-api.service';
import { UserInfo } from '../../auth.interface';

@Component({
  selector: 'app-login-view',
  templateUrl: './login-view.component.html',
  styleUrls: ['../../auth-view.component.scss'],
})
export class LoginViewComponent implements OnInit {
  loginForm: FormGroup;
  constructor(
    private router: Router,
    private form: FormBuilder,
    private readonly http: AuthViewApiService,
    private readonly storage: StorageService
  ) {}
  ngOnInit() {
    this.loginForm = this.form.group({
      identifier: [
        '',
        [Validators.required, Validators.email, Validators.minLength(4)],
      ],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
  loginUser(): void {
    if (this.loginForm.status === 'INVALID') {
      return this.loginForm.markAllAsTouched();
    }
    this.http.loginUser(this.loginForm.value).then((data: UserInfo) => {
      this.loginForm.reset();
      this.storage.set('userInfo', data);
      this.router.navigate(['app-view']);
    });
  }

  navigateToRegistration(): void {
    this.router.navigate(['auth-view/registration']);
  }
}
