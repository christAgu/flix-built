import { Movie } from './movies';

export interface Tv extends Movie {}

export interface TvDto {
  page: number;
  results: Tv[];
  total_results: number;
  total_pages: number;
}
