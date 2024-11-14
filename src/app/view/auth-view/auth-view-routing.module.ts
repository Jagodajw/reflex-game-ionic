import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthViewComponent } from './auth-view.component';

const routes: Routes = [
  {
    path: '',
    component: AuthViewComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        loadChildren: () =>
          import('./views/login-view/login-view.module').then(
            (m) => m.LoginViewModule
          ),
        // component: LoginViewComponent,
      },
      {
        path: 'registration',
        loadChildren: () =>
          import('./views/register-view/register-view.module').then(
            (m) => m.RegisterViewModule
          ),
        // component: RegisterViewComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthViewRoutingModule {
  static component = [AuthViewComponent];
}
