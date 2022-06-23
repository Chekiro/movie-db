import { IMAGES_SIZES } from './../../const/images-sizes';
import {
  Movie,
  MovieImages,
  MovieVideo,
  MovieCredits,
} from './../../models/movie';
import { MoviesService } from 'src/app/services/movie.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { first } from 'rxjs';

@Component({
  selector: 'app-movie-info',
  templateUrl: './movie-info.component.html',
  styleUrls: ['./movie-info.component.css'],
})
export class MovieInfoComponent implements OnInit {
  movie: Movie | null = null;
  movieVideos: MovieVideo[] = [];
  imageSizes = IMAGES_SIZES;
  movieImages: MovieImages | null = null;
  movieCredits: MovieCredits | null = null;

  constructor(
    private route: ActivatedRoute,
    private movieService: MoviesService
  ) {}

  ngOnInit(): void {
    this.route.params.pipe(first()).subscribe(({ id }) => {
      this.getMovieInfo(id);
      this.getMovieVideos(id);
      this.getMovieImages(id);
      this.getMovieCredits(id);
    });
  }

  getMovieInfo(id: string) {
    this.movieService.getMoviesInfo(id).subscribe((movieInfo) => {
      this.movie = movieInfo;
    });
  }

  getMovieVideos(id: string) {
    this.movieService.getMoviesVideos(id).subscribe((movieVideoData) => {
      this.movieVideos = movieVideoData;
    });
  }

  getMovieImages(id: string) {
    this.movieService.getMoviesImages(id).subscribe((movieImageData) => {
      this.movieImages = movieImageData;
    });
  }

  getMovieCredits(id: string) {
    this.movieService.getMoviesCredits(id).subscribe((movieCreditsData) => {
      this.movieCredits = movieCreditsData;
    });
  }
}
