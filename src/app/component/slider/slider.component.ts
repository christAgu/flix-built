import {
  transition,
  animate,
  trigger,
  state,
  style,
} from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { IMAGES_SIZES } from 'src/app/constants/sizes';
import { Movie } from 'src/app/model/movies';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  animations: [
    trigger('slideFade', [
      state('void', style({ opacity: 0 })),
      transition('void <=> *', [animate('1s')]),
    ]),
  ],
})
export class SliderComponent implements OnInit {
  @Input() items: Movie[] = [];
  @Input() isBanner: boolean = false;//to send banner to detail

  //stting the default value of the slide index
  setSlide: number = 0;

  readonly imagesSizes = IMAGES_SIZES;

  constructor() {}

  ngOnInit(): void {

    //looping for the slide
    if (!this.isBanner) {
      setInterval(() => {
        this.setSlide = ++this.setSlide % this.items.length;
      }, 5000);
    }
  }
}
