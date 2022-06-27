import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  constructor(private movieService: MovieService) {}

  results = this.movieService.results;
  movies = this.movieService.movies;
  searchUrl = this.movieService.SEARCH_URL;

  searchTerm(term: string) {
    let searchTerm = term;
    this.searchUrl += searchTerm;

    this.movieService.isChanged = true;
    this.movieService.searchTerm = term;

    this.movieService.getMovies(this.searchUrl).subscribe((data) => {
      this.movies = Object.values(data);
      this.movies = this.movies[this.results];
    });
  }

  ngOnInit(): void {}
}
