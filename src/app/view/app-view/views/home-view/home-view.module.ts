import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { HeaderModule } from '../../components/header/header.module';
import { HomeViewRoutingModule } from './home-view-routing.module';

@NgModule({
  declarations: [HomeViewRoutingModule.component],
  imports: [
    IonicModule,
    CommonModule,
    RouterModule,
    HomeViewRoutingModule,
    HeaderModule,
  ],
})
export class HomeViewModule {}
