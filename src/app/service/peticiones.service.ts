import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class PeticionesService {

  private apiKey = '41de32836aa217222959710aa4bfa656';

  constructor(private http: HttpClient) { }

  getPopularMovies() {
    return this.http.get(`https://api.themoviedb.org/3/movie/popular?api_key=${this.apiKey}&language=en-US&page=1`);
  }
}
