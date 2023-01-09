import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  Movie,
  MovieCredits,
  MovieDto,
  MovieImages,
  MovieVideoDto,
} from '../model/movies';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { GenresDto } from '../model/genre';
import { TvDto } from '../model/Tv';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(private http: HttpClient) {}

  baseUrl: string = 'https://api.themoviedb.org/3';
  apiKey: string = 'f54b3bd6cd59009f0b82bcc1b0c7be72';

  getMovies(type: string = 'upcoming', count: number = 12) {
    return this.http
      .get<MovieDto>(`${this.baseUrl}/movie/${type}?api_key=${this.apiKey}`)
      .pipe(
        switchMap((res) => {
          return of(res.results.slice(0, count));
        })
      );
  }

  searchMovies(page: number) {
    return this.http
      .get<MovieDto>(
        `${this.baseUrl}/movie/popular?page=${page}&api_key=${this.apiKey}`
      )
      .pipe(
        switchMap((res) => {
          return of(res.results);
        })
      );
  }

  getMovieVideos(id: string) {
    return this.http
      .get<MovieVideoDto>(
        `${this.baseUrl}/movie/${id}/videos?api_key=${this.apiKey}`
      )
      .pipe(
        switchMap((res) => {
          return of(res.results.slice(0, 1));
        })
      );
  }

  getMovie(id: string) {
    return this.http.get<Movie>(
      `${this.baseUrl}/movie/${id}?api_key=${this.apiKey}`
    );
  }

  getMoviesGenres() {
    return this.http
      .get<GenresDto>(`${this.baseUrl}/genre/movie/list?api_key=${this.apiKey}`)
      .pipe(
        switchMap((res) => {
          return of(res.genres);
        })
      );
  }

  getMovieImages(id: string) {
    return this.http.get<MovieImages>(
      `${this.baseUrl}/movie/${id}/images?api_key=${this.apiKey}`
    );
  }

  getMovieCredits(id: string) {
    return this.http.get<MovieCredits>(
      `${this.baseUrl}/movie/${id}/credits?api_key=${this.apiKey}`
    );
  }

  getMoviesByGenre(genreId: string, pageNumber: number) {
    return this.http
      .get<MovieDto>(
        `${this.baseUrl}/discover/movie?with_genres=${genreId}&page=${pageNumber}&api_key=${this.apiKey}`
      )
      .pipe(
        switchMap((res) => {
          return of(res.results);
        })
      );
  }

  getMovieSimilar(id: string) {
    return this.http
      .get<MovieDto>(
        `${this.baseUrl}/movie/${id}/similar?api_key=${this.apiKey}`
      )
      .pipe(
        switchMap((res) => {
          return of(res.results.slice(0, 12));
        })
      );
  }

  getTvs(type: string = 'latest', count: number = 12) {
    return this.http
      .get<TvDto>(`${this.baseUrl}/tv/${type}?api_key=${this.apiKey}`)
      .pipe(
        switchMap((res) => {
          return of(res.results.slice(0, count));
        })
      );
  }
}
