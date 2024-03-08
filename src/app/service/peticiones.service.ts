import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = "http://localhost:8080";
// const token = "ba5GFv23oWUhNZ4TUtumlT0aeLgNeP";
// const headers = {
//   'Authorization': `Bearer ${token}`
// }

@Injectable({
  providedIn: 'root'
})

export class PeticionesService {
  private apiKey: string = '41de32836aa217222959710aa4bfa656';
  public searchQuery: string = "";
  public ID: any;
  public bearerToken: string = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MWRlMzI4MzZhYTIxNzIyMjk1OTcxMGFhNGJmYTY1NiIsInN1YiI6IjY1YTkxYmJjNTVjMWY0MDEyODg5ZWE1NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.I7FRPNfYWFgq6giDmM43GaiYUaLSYyLM-6m7kJywMd0"

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

    getMovieId(movie_id: any): Observable<any> {
      const url = `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${this.apiKey}&language=es&page=1&append_to_response=watch/providers,credits,reviews,videos,recommendations`
      return this.http.get<any>(url)
    }

    getAll(): Observable<any[]> {
      return this.http.get<any[]>(`${baseUrl}/usuarios`)
    }

    postWatchlist(movie_id: any): Observable<any> {
      const url = `https://api.themoviedb.org/3/account/20931000/watchlist`;
      const headers = new HttpHeaders({
        'accept': 'application/json',
        'content-type': 'application/json',
        'Authorization': 'Bearer ' + this.bearerToken
      });
      const body = {
        media_type: 'movie',
        media_id: movie_id,
        watchlist: true
      };
      return this.http.post<any>(url, body, { headers });
    }

    getWatchlist(): Observable<any> {
      const url = `https://api.themoviedb.org/3/account/20931000/watchlist/movies?language=es-US&page=1&sort_by=created_at.asc`;
      const headers = new HttpHeaders({
        'accept': 'application/json',
        'content-type': 'application/json',
        'Authorization': 'Bearer ' + this.bearerToken
      });
      return this.http.get<any>(url, { headers })
    }

    delWatchlist(movie_id: any): Observable<any> {
      const url = `https://api.themoviedb.org/3/account/20931000/watchlist`;
      const headers = new HttpHeaders({
        'accept': 'application/json',
        'content-type': 'application/json',
        'Authorization': 'Bearer ' + this.bearerToken
      });
      const body = {
        media_type: 'movie',
        media_id: movie_id,
        watchlist: false
      };
      return this.http.post<any>(url, body, { headers });
    }
}