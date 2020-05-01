import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slides',
  templateUrl: './slides.component.html',
  styleUrls: ['./slides.component.scss'],
})
export class SlidesComponent implements OnInit {
  constructor() {}

  slideOpts = {
    scrollbar: false,
  };

  slides = [
    {
      icon: './assets/slide1.svg',
      description: `No busca simplificada,
        você pode consultar a loja em que você
        está e consultar se possue o produto, ou encontrar a loja mais próxima.`,
      activeBtn: false,
    },
    {
      icon: './assets/slide2.svg',
      description:
        'Consulte os preços de produtos das prateleiras, através do leitor de código de barras e simplifique suas compras.',
      activeBtn: false,
    },
    {
      icon: './assets/slide3.svg',
      description: 'Com tantas facilidades, fica até mais gostoso de comprar :)',
      activeBtn: true,
    },
  ];

  ngOnInit() {}
}
