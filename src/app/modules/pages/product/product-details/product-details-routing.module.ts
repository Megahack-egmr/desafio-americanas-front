import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { ProductDetailsPage } from './product-details.page';

const routes: Routes = [
  {
    path: ':id',
    component: ProductDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductDetailsPageRoutingModule { }
