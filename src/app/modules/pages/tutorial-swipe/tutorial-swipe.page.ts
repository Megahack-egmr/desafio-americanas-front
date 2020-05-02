import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tutorial-swipe',
  templateUrl: './tutorial-swipe.page.html',
  styleUrls: ['./tutorial-swipe.page.scss'],
})
export class TutorialSwipePage implements OnInit {
  arraySlides = [
    {
      icon: './assets/slide-1.svg',
      description: `No busca simplificada,
        você pode consultar a loja em que você
        está e consultar se possue o produto, ou encontrar a loja mais próxima.`,
      activeBtn: false,
    },
    {
      icon: './assets/slide-2.svg',
      description:
        'Consulte os preços de produtos das prateleiras, através do leitor de código de barras e simplifique suas compras.',
      activeBtn: false,
    },
    {
      icon: './assets/slide-3.svg',
      description: 'Com tantas facilidades, fica até mais gostoso de comprar :)',
      activeBtn: true,
    },
  ];

  constructor() {}

  ngOnInit() {}
}
