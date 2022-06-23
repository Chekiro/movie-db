import { Movie } from './../../models/movie';
import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
})
export class MoviesComponent implements OnInit {
  movies: Movie[] = [];

  ngOnInit(): void {
    this.getMoviePg(1);
  }

  getMoviePg(page: number) {
    this.moviesService.searchMovies(page).subscribe((movies) => {
      this.movies = movies;
    });
  }

  constructor(private moviesService: MoviesService) {}

  paginate(event: any) {
    this.getMoviePg(event.page + 1);
  }
}
