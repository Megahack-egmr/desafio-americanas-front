import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { ProductItemComponent } from './components/product-item/product-item.component';

@NgModule({
  imports: [IonicModule.forRoot()],
  declarations: [ProductItemComponent],
  exports: [ProductItemComponent]
})
export class SharedModule { }
