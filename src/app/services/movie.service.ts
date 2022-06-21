import { MovieDto } from './../models/movie';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  baseUrl: string = 'https://api.themoviedb.org/3';
  apiKey: string = '3614ffcb4bc46f918e10e2711820da16';

  constructor(private http: HttpClient) {}

  getMovies(type: string = 'upcoming', count: number = 12) {
    return this.http
      .get<MovieDto>(`${this.baseUrl}/movie/${type}?api_key=${this.apiKey}`)
      .pipe(
        switchMap((response) => {
          return of(response.results.slice(0, count));
        })
      );
  }

  searchMovies(page: number) {
    return this.http
      .get<MovieDto>(
        `${this.baseUrl}/movie/popular?page=${page}&api_key=${this.apiKey}`
      )
      .pipe(
        switchMap((response) => {
          return of(response.results);
        })
      );
  }
}
