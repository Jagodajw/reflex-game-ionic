import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AuthViewRoutingModule } from './auth-view-routing.module';

@NgModule({
  declarations: [AuthViewRoutingModule.component],
  imports: [IonicModule, CommonModule, RouterModule, AuthViewRoutingModule],
})
export class AuthViewModule {}
