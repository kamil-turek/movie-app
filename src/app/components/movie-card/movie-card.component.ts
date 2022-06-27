import { Component, OnInit, DoCheck } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
})
export class MovieCardComponent implements OnInit, DoCheck {
  constructor(private movieService: MovieService) {}

  results = this.movieService.results;
  movies = this.movieService.movies;
  img = this.movieService.IMG_PATH;

  ngOnInit(): void {
    this.movieService
      .getMovies(this.movieService.URL_POPULAR)
      .subscribe((data) => {
        this.movies = Object.values(data);
        this.movies = this.movies[this.results];
      });
  }

  ngDoCheck(): void {
    if (this.movieService.isChanged) {
      const url = this.movieService.SEARCH_URL + this.movieService.searchTerm;

      this.movieService.getMovies(url).subscribe((data) => {
        this.movies = Object.values(data);
        this.movies = this.movies[this.results];
      });
    }
    this.movieService.isChanged = false;
  }
}
