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
  popularMovie: Movie[] = [];
  topRatedMovie: Movie[] = [];
  upcomingMovie: Movie[] = [];
  tvTopRated: Movie[] = [];

  constructor(private movieService: MoviesService, private tv: TvService) {}

  ngOnInit(): void {
    this.movieService.getMovies('popular').subscribe((movies) => {
      this.popularMovie = movies;
    });
    this.movieService.getMovies('top_rated').subscribe((movies) => {
      this.topRatedMovie = movies;
    });
    this.movieService.getMovies('upcoming').subscribe((movies) => {
      this.upcomingMovie = movies;
    });
    // this.tv.getMovies('top_rated').subscribe((response) => {
    //   this.tvTopRated = response;
    // });
  }
}
