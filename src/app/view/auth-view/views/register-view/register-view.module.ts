import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RegisterViewRoutingModule } from './register-view-routing.module';

@NgModule({
  declarations: [RegisterViewRoutingModule.component],
  exports: [RegisterViewRoutingModule.component],
  imports: [IonicModule, CommonModule, RegisterViewRoutingModule, ReactiveFormsModule, FormsModule],
})
export class RegisterViewModule {}
