import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { ProductItemComponent } from './../../../../shared/components/product-item/product-item.component';
import { ProductsSlideComponent } from './../../../../shared/components/products-slide/products-slide.component';
import { SearchProductsPage } from './search-products.page';
import { SearchProductsPageRoutingModule } from './search-products-routing.module';
import { SharedModule } from '../../../../shared/shared.module';
import { TextOverflowPipe } from './../../../../shared/pipes/text-overflow/text-overflow.pipe';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, SearchProductsPageRoutingModule],
  declarations: [SearchProductsPage, ProductsSlideComponent, ProductItemComponent, TextOverflowPipe],
})
export class SearchProductsPageModule {}
