import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { environment } from 'src/environments/environment';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth-view',
    pathMatch: 'full',
  },
  {
    path: 'auth-view',
    loadChildren: () =>
      import('./view/auth-view/auth-view.module').then((m) => m.AuthViewModule),
  },
  {
    path: 'game-view',
    loadChildren: () =>
      import('./view/game-view/game-view.module').then((m) => m.GameViewModule),
  },
  {
    path: 'app-view',
    loadChildren: () =>
      import('./view/app-view/app-view.module').then((m) => m.AppViewModule),
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
      enableTracing: environment.enableRoutingTracing,
      relativeLinkResolution: 'legacy',
      paramsInheritanceStrategy: 'always',
      useHash: true,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
