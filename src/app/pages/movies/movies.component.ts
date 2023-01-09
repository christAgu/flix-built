import {
  transition,
  animate,
  trigger,
  state,
  style,
} from '@angular/animations';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';


import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/model/movies';
import { MoviesService } from '../../service/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
  animations: [
    trigger('slideFade', [
      state('void', style({ opacity: 0 })),
      transition('void <=> *', [animate('1s')]),
    ]),
  ],
})
export class MoviesComponent implements OnInit {
  movies: Movie[] = [];
  id: string | null = null;
  constructor(private moviesService: MoviesService ,  private route: ActivatedRoute) {}



  ngOnInit(): void {
    this.route.params.pipe(take(1)).subscribe(({ genreId }) => {
      if (genreId) {
        this.id = genreId;
        this.getMoviesByGenre(genreId, 1);
      } else {
        this.getPagedMovies(1);
      }
    });
  }
  getMoviesByGenre(genreId: string, page: number) {
    this.moviesService.getMoviesByGenre(genreId, page).subscribe((movies) => {
      this.movies = movies;
    });
  }


  getPagedMovies(page: number) {
    this.moviesService.searchMovies(page).subscribe((movies) => {
      this.movies = movies;
    });
  }

  //pagination onclick
  paginate(event: any) {
    this.getPagedMovies(event.page + 1);
  }
}
