import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { HeaderModule } from '../../components/header/header.module';
import { RankingViewRoutingModule } from './ranking-view-routing.module';

@NgModule({
  declarations: [RankingViewRoutingModule.component],
  imports: [
    IonicModule,
    CommonModule,
    RouterModule,
    RankingViewRoutingModule,
    HeaderModule,
  ],
})
export class RankingViewModule {}
