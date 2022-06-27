import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor(private http: HttpClient) {}

  results: number = 1;
  movies: any[] = [];
  isChanged: boolean = false;
  searchTerm: string = '';

  URL_POPULAR =
    'https://api.themoviedb.org/3/movie/popular?api_key=c8e7d0ca4097fa46541ae78612eca313';

  SEARCH_URL =
    'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="';

  IMG_PATH = 'https://image.tmdb.org/t/p/w1280';

  getMovies(url: string): Observable<any[]> {
    return this.http.get<any[]>(url);
  }
}
