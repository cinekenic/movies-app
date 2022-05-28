import { Component, OnInit } from '@angular/core';
import { CalendarModule } from 'primeng/calendar';
import { Movie } from '../../models/movie';
import { MoviesService } from 'src/app/services/movies.service';

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
  constructor(private movieService: MoviesService) {}

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
  }
}
