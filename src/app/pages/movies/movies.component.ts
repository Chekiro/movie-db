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

  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.moviesService.searchMovies(1).subscribe((movies) => {
      this.movies = movies;
    });
  }
}
