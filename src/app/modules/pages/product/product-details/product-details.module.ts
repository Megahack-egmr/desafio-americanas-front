import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { ProductDetailsPage } from './product-details.page';
import { ProductDetailsPageRoutingModule } from './product-details-routing.module';
import { ProductItemComponent } from '../../../../shared/components/product-item/product-item.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductDetailsPageRoutingModule
  ],
  declarations: [ProductDetailsPage,
    ProductItemComponent]
})
export class ProductDetailsPageModule { }
