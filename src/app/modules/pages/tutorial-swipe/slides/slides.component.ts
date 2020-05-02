import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-slides',
  templateUrl: './slides.component.html',
  styleUrls: ['./slides.component.scss'],
})
export class SlidesComponent implements OnInit {
  @Input() slides: [];

  constructor() {}

  slideOpts = {
    scrollbar: false,
  };

  ngOnInit() {}
}
