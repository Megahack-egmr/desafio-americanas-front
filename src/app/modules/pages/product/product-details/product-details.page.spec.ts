import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { IonicModule } from '@ionic/angular';
import { ProductDetailsPage } from './product-details.page';
import { ProductItemComponent } from './../../../../shared/components/product-item/product-item.component';
import { ProductsSlideComponent } from './../../../../shared/components/products-slide/products-slide.component';
import { RouterTestingModule } from '@angular/router/testing';
import { TextOverflowPipe } from './../../../../shared/pipes/text-overflow/text-overflow.pipe';

describe('ProductDetailsPage', () => {
  let component: ProductDetailsPage;
  let fixture: ComponentFixture<ProductDetailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProductDetailsPage, ProductItemComponent, ProductsSlideComponent, TextOverflowPipe],
      imports: [IonicModule.forRoot(), RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
