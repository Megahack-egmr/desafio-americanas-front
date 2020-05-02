import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: 'produtos',
    loadChildren: () => import('./modules/pages/product/product.module').then((m) => m.ProductModule),
  },
  {
    path: 'tutorial',
    loadChildren: () =>
      import('./modules/pages/tutorial-swipe/tutorial-swipe.module').then((m) => m.TutorialSwipePageModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
