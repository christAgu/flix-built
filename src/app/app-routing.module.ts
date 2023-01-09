import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { DetailComponent } from './pages/detail/detail.component';
import { GenreComponent } from './pages/genre/genre.component';
const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'movies',
    component: MoviesComponent,
  },
  {
    path: 'categories',
    component: GenreComponent,
  },
  {
    path: 'movie/:id',
    component: DetailComponent,
  },
  {
    path: 'movies/categories/:id',
    component: MoviesComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
