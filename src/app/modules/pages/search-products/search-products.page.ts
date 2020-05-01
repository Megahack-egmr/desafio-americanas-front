import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-products',
  templateUrl: './search-products.page.html',
  styleUrls: ['./search-products.page.scss'],
})
export class SearchProductsPage implements OnInit {

  products: Array<{}> = [{}, {}, {}, {}, {}, {}, {}];

  constructor() { }

  ngOnInit() {
  }

}
