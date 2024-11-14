import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppViewComponent } from './app-view.component';

const routes: Routes = [
  {
    path: '',
    component: AppViewComponent,
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('./views/home-view/home-view.module').then(
            (m) => m.HomeViewModule
          ),
      },
      {
        path: 'ranking',
        loadChildren: () =>
          import('./views/ranking-view/ranking-view.module').then(
            (m) => m.RankingViewModule
          ),
      },
      {
        path: 'about-app',
        loadChildren: () =>
          import('./views/about-app-view/about-app-view.module').then(
            (m) => m.AboutAppViewModule
          ),
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppViewRoutingModule {
  static component = [AppViewComponent];
}
