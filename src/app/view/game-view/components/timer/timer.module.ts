import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { TimerComponent } from './timer.component';

@NgModule({
  exports: [TimerComponent],
  declarations: [TimerComponent],
  imports: [IonicModule, CommonModule],
})
export class TimerModule {}
