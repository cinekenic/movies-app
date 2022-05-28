import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TvService {
  constructor(private http: HttpClient) {}
  baseUrl: string = 'https://api.themoviedb.org/3';
  apiKey: string = 'a6080a69c0f6a762a46bd110c5ca3373';
  getMovies(type: string = 'upcoming') {
    return this.http.get(`${this.baseUrl}/tv/${type}?api_key=${this.apiKey}`);
  }
}
