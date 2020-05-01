import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { SearchProductsPage } from './search-products.page';
import { SearchProductsPageRoutingModule } from './search-products-routing.module';
import { SharedModule } from './../../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchProductsPageRoutingModule,
    SharedModule
  ],
  declarations: [SearchProductsPage]
})
export class SearchProductsPageModule { }
