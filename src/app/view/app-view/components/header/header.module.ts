import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from './header.component';

@NgModule({
  exports: [HeaderComponent],
  declarations: [HeaderComponent],
  imports: [IonicModule, CommonModule, RouterModule],
})
export class HeaderModule {}
