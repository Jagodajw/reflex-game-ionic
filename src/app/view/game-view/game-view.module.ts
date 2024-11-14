import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ScorePointModule } from './components/score-point/score-point.module';
import { TimerModule } from './components/timer/timer.module';
import { GameViewRoutingModule } from './game-view-routing.module';
import { ScorePositionDirective } from './score-position.directive';

@NgModule({
  declarations: [GameViewRoutingModule.component, ScorePositionDirective],
  imports: [
    IonicModule,
    CommonModule,
    GameViewRoutingModule,
    TimerModule,
    ScorePointModule,
  ],
})
export class GameViewModule {}
