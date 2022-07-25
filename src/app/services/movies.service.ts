import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie, MovieCredits, MovieDto, movieImages, MovieVideoDto, SimilarMovies } from '../models/movie';
import { of, switchMap } from 'rxjs';
import { GenresDto } from '../models/genre';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  constructor(private http: HttpClient) {}
  baseUrl: string = 'https://api.themoviedb.org/3';
  apiKey: string = 'a6080a69c0f6a762a46bd110c5ca3373';
  getMovies(type: string = 'upcoming', count: number = 12) {
    return this.http.get<MovieDto>(`${this.baseUrl}/movie/${type}?api_key=${this.apiKey}`).pipe(
      switchMap((res) => {
        console.log(res);
        return of(res.results.slice(0, count));
      })
    );
  }

  getMoviesVideos(id: string) {
    return this.http.get<MovieVideoDto>(`${this.baseUrl}/movie/${id}/videos?api_key=${this.apiKey}`).pipe(
      switchMap((res) => {
        return of(res.results);
      })
    );
  }

  getMoviesGentes() {
    return this.http.get<GenresDto>(`${this.baseUrl}/genre/movie/list?api_key=${this.apiKey}`).pipe(
      switchMap((res) => {
        console.log(res);
        return of(res.genres);
      })
    );
  }

  getMoviesByGenre(genreId: string, page: number) {
    return this.http
      .get<MovieDto>(`${this.baseUrl}/discover/movie?with_genres=${genreId}&page=${page}&api_key=${this.apiKey}`)
      .pipe(
        switchMap((res) => {
          return of(res.results);
        })
      );
  }

  getMoviesImages(id: string) {
    return this.http.get<movieImages>(`${this.baseUrl}/movie/${id}/images?api_key=${this.apiKey}`);
  }

  getMovieCredits(id: string) {
    return this.http.get<MovieCredits>(`${this.baseUrl}/movie/${id}/credits?api_key=${this.apiKey}`);
  }

  getSimilarMovie(id: string) {
    return this.http.get<MovieDto>(`${this.baseUrl}/movie/${id}/similar?api_key=${this.apiKey}`);
  }

  getMovie(id: string) {
    return this.http.get<Movie>(`${this.baseUrl}/movie/${id}?api_key=${this.apiKey}`);
  }

  searchMovies(page: number, searchValue?: string) {
    const uri = searchValue ? '/search/movie' : '/movie/popular';
    return this.http
      .get<MovieDto>(`${this.baseUrl}${uri}?page=${page}&query=${searchValue}&api_key=${this.apiKey}`)
      .pipe(
        switchMap((res) => {
          return of(res.results);
        })
      );
  }
}
