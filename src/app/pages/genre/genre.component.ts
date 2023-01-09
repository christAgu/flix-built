import { Component, OnInit } from '@angular/core'
import { MoviesService } from '../../service/movies.service';

import { Genre } from '../../model/genre';

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.scss']
})
export class GenreComponent implements OnInit {
  genres: Genre[] = [];
  tvShowGenres: Genre[] = [];
  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.moviesService.getMoviesGenres().subscribe((genresData) => {
      this.genres = genresData;
    });

  
  }

}
