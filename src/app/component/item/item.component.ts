import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/model/movies';
import { IMAGES_SIZES } from '../../constants/sizes';

@Component({
  selector: 'movie-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnInit {
  @Input() itemData: Movie | null = null;
  constructor() {}

  imagesSizes = IMAGES_SIZES;

  ngOnInit(): void {}
}
