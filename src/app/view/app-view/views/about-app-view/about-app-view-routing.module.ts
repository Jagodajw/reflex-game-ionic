import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutAppViewComponent } from './about-app-view.component';

const routes: Routes = [
  {
    path: '',
    component: AboutAppViewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AboutAppViewRoutingModule {
  static component = [AboutAppViewComponent];
}
