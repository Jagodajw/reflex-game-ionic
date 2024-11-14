import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { LoginViewRoutingModule } from './login-view-routing.module';

@NgModule({
  declarations: [LoginViewRoutingModule.component],
  exports: [LoginViewRoutingModule.component],
  imports: [IonicModule, CommonModule, RouterModule, LoginViewRoutingModule,ReactiveFormsModule,FormsModule],
})
export class LoginViewModule {}
