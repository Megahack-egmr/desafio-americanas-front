import { Component, OnInit } from '@angular/core';

import { ProductsSlideEnum } from './../../../../shared/models/products-slide-enum';

@Component({
  selector: 'app-search-products',
  templateUrl: './search-products.page.html',
  styleUrls: ['./search-products.page.scss'],
})
export class SearchProductsPage implements OnInit {
  products: Array<{}> = [{}, {}, {}, {}, {}, {}, {}];
  ProductsSlide = ProductsSlideEnum;

  constructor() {}

  ngOnInit() {}
}
