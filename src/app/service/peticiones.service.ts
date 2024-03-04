import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class PeticionesService {
  private apiKey: string = '41de32836aa217222959710aa4bfa656';
  searchQuery: string = '';
  public ID: any;

  constructor(private http: HttpClient) { }

    getPopularMovies() {
      return this.http.get(`https://api.themoviedb.org/3/movie/popular?api_key=${this.apiKey}&language=en-US&page=1`);
    }

    getMoviesBuscador(query: string): Observable<any> {
      const url = `https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${query}`;
      return this.http.get(url);
    }
  
    setcompartirsearchQuery(parametro: string) {
      this.searchQuery = parametro;
    }

    getMovieId(movie_id: number) {
      const url = `https://api.themoviedb.org/3/movie/${movie_id}?${this.apiKey}`
      return this.http.get(url)
    }
}