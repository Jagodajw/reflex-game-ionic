import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { HeaderModule } from '../../components/header/header.module';
import { AboutAppViewRoutingModule } from './about-app-view-routing.module';

@NgModule({
  declarations: [AboutAppViewRoutingModule.component],
  imports: [
    IonicModule,
    CommonModule,
    RouterModule,
    AboutAppViewRoutingModule,
    HeaderModule,
  ],
})
export class AboutAppViewModule {}
