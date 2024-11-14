import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { AppViewRoutingModule } from './app-view-routing.module';
import { AppViewComponent } from './app-view.component';

@NgModule({
  declarations: [AppViewComponent],
  imports: [IonicModule, CommonModule, AppViewRoutingModule],
})
export class AppViewModule {}
