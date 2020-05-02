import { Component, Input, OnInit } from '@angular/core';

import { ProductsSlideEnum } from './../../models/products-slide-enum';

@Component({
  selector: 'app-products-slide',
  templateUrl: './products-slide.component.html',
  styleUrls: ['./products-slide.component.scss'],
})
export class ProductsSlideComponent implements OnInit {
  @Input() type: ProductsSlideEnum;
  title: string;
  products: Array<{}> = [{}, {}, {}, {}, {}, {}, {}];

  constructor() {}

  ngOnInit() {
    this.getProductSlideType();
  }

  private getProductSlideType() {
    if (this.type === ProductsSlideEnum.AlsoEnjoy) {
      this.title = 'aproveite também';
    } else if (this.type === ProductsSlideEnum.BestsellersToday) {
      this.title = 'os mais vendidos de hoje';
    }
  }
}
