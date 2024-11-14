import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';
import { AuthViewApiService } from '../../auth-view-api.service';

@Component({
  selector: 'app-register-view',
  templateUrl: './register-view.component.html',
  styleUrls: ['../../auth-view.component.scss'],
})
export class RegisterViewComponent implements OnInit {
  registerForm: FormGroup;
  constructor(
    private router: Router,
    private form: FormBuilder,
    private readonly http: AuthViewApiService,
    private readonly storage: StorageService
  ) {}
  ngOnInit() {
    this.registerForm = this.form.group({
      email: [
        '',
        [Validators.required, Validators.email, Validators.minLength(4)],
      ],
      username: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
  registerUser(): void {
    if (this.registerForm.status === 'INVALID') {
      return this.registerForm.markAllAsTouched();
    }
    this.http.registerUser(this.registerForm.value).then((data) => {
      this.storage.set('userInfo', data);
      this.router.navigate(['app-view']);
    });
    this.registerForm.reset();
  }

  navigateToLogin(): void {
    this.router.navigate(['auth-view']);
  }
}
