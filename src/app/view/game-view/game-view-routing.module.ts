import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameViewComponent } from './game-view.component';

const routes: Routes = [
  {
    path: '',
    component: GameViewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class GameViewRoutingModule {
  static component = [GameViewComponent];
}
