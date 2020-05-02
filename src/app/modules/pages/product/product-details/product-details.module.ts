import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { ProductDetailsPage } from './product-details.page';
import { ProductDetailsPageRoutingModule } from './product-details-routing.module';
import { ProductItemComponent } from '../../../../shared/components/product-item/product-item.component';
import { ProductsSlideComponent } from './../../../../shared/components/products-slide/products-slide.component';
import { TextOverflowPipe } from './../../../../shared/pipes/text-overflow/text-overflow.pipe';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, ProductDetailsPageRoutingModule],
  declarations: [ProductDetailsPage, ProductItemComponent, ProductsSlideComponent, TextOverflowPipe],
})
export class ProductDetailsPageModule {}
