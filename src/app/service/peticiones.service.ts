import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class PeticionesService {

  public url:string;

  constructor(
    private _http: HttpClient
  ){
    this.url = "https://jsonplaceholder.typicode.com/posts";
  }

  getArticulos(){
    return this._http.get<any>(this.url)
  }
}
