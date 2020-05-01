import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'buscar-produtos',
    pathMatch: 'full',
  },
  {
    path: 'produto',
    loadChildren: () => import('./product-details/product-details.module').then((m) => m.ProductDetailsPageModule),
  },
  {
    path: 'buscar-produtos',
    loadChildren: () => import('./search-products/search-products.module').then((m) => m.SearchProductsPageModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductRoutingModule {}
