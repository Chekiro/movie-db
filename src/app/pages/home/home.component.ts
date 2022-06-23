import { Movie } from './../../models/movie';
import { MoviesService } from './../../services/movie.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  upcomingMovies: Movie[] = [];
  popularMovies: Movie[] = [];
  topRatedMovies: Movie[] = [];
  nowPlayingMovies: Movie[] = [];

  constructor(private movieService: MoviesService) {}

  ngOnInit(): void {
    //Upcoming
    this.movieService.getMovies('upcoming').subscribe((movies) => {
      this.upcomingMovies = movies;
    });
    // Popular
    this.movieService.getMovies('popular').subscribe((movies) => {
      this.popularMovies = movies;
    });

    // Latest
    this.movieService.getMovies('top_rated').subscribe((movies) => {
      this.topRatedMovies = movies;
    });
    //Now playing
    this.movieService.getMovies('now_playing').subscribe((movies) => {
      this.nowPlayingMovies = movies;
    });
  }
}
