import { Component, OnInit } from '@angular/core';
import { Movie } from '../../models/movie';
import { MoviesService } from 'src/app/services/movies.service';
import { TvService } from 'src/app/services/tv.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  // movies: any = [];
  popularMovie: Movie[] = [];
  topRatedMovie: Movie[] = [];
  upcomingMovie: Movie[] = [];
  tvTopRated: Movie[] = [];

  constructor(private movieService: MoviesService, private tv: TvService) {}

  ngOnInit(): void {
    this.movieService.getMovies('popular').subscribe((response: any) => {
      this.popularMovie = response.results;
    });
    this.movieService.getMovies('top_rated').subscribe((response: any) => {
      this.topRatedMovie = response.results;
    });
    this.movieService.getMovies('upcoming').subscribe((response: any) => {
      this.upcomingMovie = response.results;
    });
    this.tv.getMovies('top_rated').subscribe((response: any) => {
      this.tvTopRated = response.results;
    });
  }
}
