import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: 'produto',
    loadChildren: () => import('./modules/pages/product-details/product-details.module').then(m => m.ProductDetailsPageModule)
  },
  {
    path: 'buscar-produtos',
    loadChildren: () => import('./modules/pages/search-products/search-products.module').then(m => m.SearchProductsPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
})
export class AppRoutingModule { }
