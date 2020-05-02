import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { IonicModule } from '@ionic/angular';
import { ProductsSlideComponent } from './products-slide.component';
import { TextOverflowPipe } from './../../pipes/text-overflow/text-overflow.pipe';

describe('ProductsSlideComponent', () => {
  let component: ProductsSlideComponent;
  let fixture: ComponentFixture<ProductsSlideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProductsSlideComponent, TextOverflowPipe],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductsSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
