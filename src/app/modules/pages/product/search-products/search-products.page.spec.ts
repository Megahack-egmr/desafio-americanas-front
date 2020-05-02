import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { IonicModule } from '@ionic/angular';
import { ProductItemComponent } from './../../../../shared/components/product-item/product-item.component';
import { SearchProductsPage } from './search-products.page';

describe('SearchProductsPage', () => {
  let component: SearchProductsPage;
  let fixture: ComponentFixture<SearchProductsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SearchProductsPage, ProductItemComponent],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(SearchProductsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
