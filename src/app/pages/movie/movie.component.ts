import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { first } from 'rxjs';
import { IMAGES_SIZES } from 'src/app/constants/images-sizes';
import { Movie, MovieCredits, movieImages, MovieVideo, SimilarMovies } from 'src/app/models/movie';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit, OnDestroy {
  movie: Movie | null = null;
  moviesVideos: MovieVideo[] = [];
  movieImages: movieImages | null = null;
  movieCredits: MovieCredits | null = null;
  similarMovies: SimilarMovies | null = null;
  imagesSizes = IMAGES_SIZES;

  constructor(private route: ActivatedRoute, private movieService: MoviesService) {}

  ngOnInit(): void {
    this.route.params.pipe(first()).subscribe(({ id }) => {
      console.log(id);
      this.getMovie(id);
      this.getMovieVideos(id);
      this.getMovieImages(id);
      this.getMovieCredits(id);
      this.getSimilarMovie(id);
    });
  }

  ngOnDestroy(): void {}

  getMovie(id: string) {
    this.movieService.getMovie(id).subscribe((movieData) => {
      this.movie = movieData;
      console.log(this.movie);
    });
  }

  getMovieVideos(id: string) {
    this.movieService.getMoviesVideos(id).subscribe((moviesVideoData) => {
      this.moviesVideos = moviesVideoData;
    });
  }

  getMovieImages(id: string) {
    this.movieService.getMoviesImages(id).subscribe((movieImage) => {
      this.movieImages = movieImage;
    });
  }
  getMovieCredits(id: string) {
    this.movieService.getMovieCredits(id).subscribe((movieCreditData) => {
      this.movieCredits = movieCreditData;
    });
  }

  getSimilarMovie(id: string) {
    this.movieService.getSimilarMovie(id).subscribe((similarMovie) => {
      this.similarMovies = similarMovie;
      console.log(this.similarMovies);
    });
  }
}
