import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { SliderComponent } from './component/slider/slider.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { ItemBannerComponent } from './component/item-banner/item-banner.component';
import { ItemComponent } from './component/item/item.component';
import { PaginatorModule } from 'primeng/paginator';
import { DetailComponent } from './pages/detail/detail.component';

import { TabViewModule } from 'primeng/tabview';


import { ImageModule } from 'primeng/image';
import { CarouselModule } from 'primeng/carousel';

import { EmbedComponent } from './component/embed/embed.component';
import { GenreComponent } from './pages/genre/genre.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    MoviesComponent,
    SliderComponent,
    ItemBannerComponent,
    ItemComponent,
    DetailComponent,
    EmbedComponent,
    GenreComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    PaginatorModule,
    TabViewModule,
    ImageModule,
    CarouselModule

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
