import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/model/movies';
import { MoviesService } from '../../service/movies.service';
import { MovieDto } from '../../model/movies'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  movies:Movie[] = []
  upcomingMovies: Movie[] = [];
  topRatedMovies: Movie[] = [];
  // popularTvShows: Tv[] = [];

  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.moviesService.getMovies().subscribe((movie) => {
      console.log(movie);
      this.movies=movie

    });
    this.moviesService.getMovies('top_rated').subscribe((movie) => {
      console.log(movie)
      this.topRatedMovies = movie;
    });
    this.moviesService.getMovies('upcoming').subscribe((movie) => {
      console.log(movie)
      this.upcomingMovies = movie;
    });
    // this.moviesService.getTvs('popular').subscribe((tvShows:any) => {
    //   this.popularTvShows = tvShows;
    // });
  }
}
