import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.page.html',
  styleUrls: ['./product-details.page.scss'],
})
export class ProductDetailsPage implements OnInit {
  private id: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.getProductID();
  }

  private getProductID(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = params.id;
    });
  }
}

interface Params {
  id: string;
}

