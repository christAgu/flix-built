import { Component,OnDestroy, OnInit} from '@angular/core';
import { first } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { IMAGES_SIZES } from 'src/app/constants/sizes';
import {
  Movie,
  MovieCredits,
  MovieImages,
  MovieVideo,
} from '../../model/movies';
import { MoviesService } from 'src/app/service/movies.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  movie: Movie | null = null;
  movieVideos: MovieVideo[] = [];
  movieImages: MovieImages | null = null;
  movieCredits: MovieCredits | null = null;
  imagesSizes = IMAGES_SIZES;
  similarMovies: Movie[] = [];

  constructor(
    private route: ActivatedRoute,
    private moviesService: MoviesService
  ) {}

  //{ id } in object no to do param.id

  ngOnInit(): void {
    this.route.params.pipe().subscribe(({ id }) => {
      console.log(id);
      this.getMovie(id);
      this.getMovieVideos(id);
      this.getMovieImages(id);
      this.getMovieCredits(id);
      this.getMovieSimilar(id);
    });
  }

  ngOnDestroy() {
    console.log('component destroyed');
  }

  getMovie(id: string) {
    this.moviesService.getMovie(id).subscribe((movieData) => {
      this.movie = movieData;
    });
  }

  getTvShows(id: string) {
    this.moviesService.getMovie(id).subscribe((movieData) => {
      this.movie = movieData;
    });
  }
  getMovieVideos(id: string) {
    this.moviesService.getMovieVideos(id).subscribe((movieVideosData) => {
      this.movieVideos = movieVideosData;
    });
  }

  getMovieSimilar(id: string) {
    this.moviesService.getMovieSimilar(id).subscribe((movieSimilarData) => {
      this.similarMovies = movieSimilarData;
    });
  }

  getMovieImages(id: string) {
    this.moviesService.getMovieImages(id).subscribe((movieImagesData) => {
      this.movieImages = movieImagesData;
    });
  }

  getMovieCredits(id: string) {
    this.moviesService.getMovieCredits(id).subscribe((movieCreditsData) => {
      this.movieCredits = movieCreditsData;
    });
  }
}
