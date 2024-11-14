import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ScorePointComponent } from './score-point.component';

@NgModule({
  exports: [ScorePointComponent],
  declarations: [ScorePointComponent],
  imports: [IonicModule, CommonModule],
})
export class ScorePointModule {}
