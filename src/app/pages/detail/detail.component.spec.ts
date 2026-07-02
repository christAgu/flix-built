import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { Subject, of } from 'rxjs';

import { DetailComponent } from './detail.component';
import { MoviesService } from 'src/app/service/movies.service';
import { Movie } from 'src/app/model/movies';

describe('DetailComponent', () => {
  let component: DetailComponent;
  let fixture: ComponentFixture<DetailComponent>;
  let routeParams: Subject<{ id: string }>;
  let movieResponses: Record<string, Subject<Movie>>;
  let moviesServiceSpy: jasmine.SpyObj<MoviesService>;

  beforeEach(async () => {
    routeParams = new Subject();
    movieResponses = { '1': new Subject<Movie>(), '2': new Subject<Movie>() };

    moviesServiceSpy = jasmine.createSpyObj('MoviesService', [
      'getMovie',
      'getMovieVideos',
      'getMovieImages',
      'getMovieCredits',
      'getMovieSimilar',
    ]);
    moviesServiceSpy.getMovie.and.callFake((id: string) => movieResponses[id].asObservable());
    moviesServiceSpy.getMovieVideos.and.returnValue(of([]));
    moviesServiceSpy.getMovieImages.and.returnValue(of({ backdrops: [] }));
    moviesServiceSpy.getMovieCredits.and.returnValue(of({ cast: [] }));
    moviesServiceSpy.getMovieSimilar.and.returnValue(of([]));

    await TestBed.configureTestingModule({
      declarations: [DetailComponent],
      providers: [
        { provide: MoviesService, useValue: moviesServiceSpy },
        { provide: ActivatedRoute, useValue: { params: routeParams.asObservable() } },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(DetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should only render the most recently requested movie when the route param changes before the first request resolves', () => {
    routeParams.next({ id: '1' });
    routeParams.next({ id: '2' });

    // regression test: the slow response for the abandoned id=1 request
    // arrives after id=2's response and must not overwrite it
    movieResponses['2'].next({ id: 2, title: 'Movie Two' } as Movie);
    movieResponses['1'].next({ id: 1, title: 'Movie One' } as Movie);

    expect(component.movie?.title).toBe('Movie Two');
  });
});
