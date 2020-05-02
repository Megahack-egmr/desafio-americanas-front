import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { ProductsSlideComponent } from './components/products-slide/products-slide.component';
import { TextOverflowPipe } from './pipes/text-overflow/text-overflow.pipe';

@NgModule({
  imports: [IonicModule.forRoot(), CommonModule, FormsModule, IonicModule],
  declarations: [ProductItemComponent, ProductsSlideComponent, TextOverflowPipe],
  exports: [ProductItemComponent, ProductsSlideComponent],
})
export class SharedModule {}
