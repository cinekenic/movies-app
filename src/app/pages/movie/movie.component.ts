import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IMAGES_SIZES } from 'src/app/constants/images-sizes';
import { Movie, movieImages, MovieVideo } from 'src/app/models/movie';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  movie: Movie | null = null;
  moviesVideos: MovieVideo[] = [];
  movieImages: movieImages | null = null;
  imagesSizes = IMAGES_SIZES;

  constructor(private route: ActivatedRoute, private movieService: MoviesService) {}

  ngOnInit(): void {
    this.route.params.subscribe(({ id }) => {
      console.log(id);
      this.getMovie(id);
      this.getMovieVideos(id);
      this.getMovieImages(id);
    });
  }

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
}
