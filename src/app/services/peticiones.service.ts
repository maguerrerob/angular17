import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//librería para mapear la respuesta http
//import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root',
})

export class PeticionesServices{

	public url:string;

	constructor(
		private _http: HttpClient
	){
		this.url = "https://jsonplaceholder.typicode.com/posts";
	}

	getPrueba(){
		return "hola mundo desde el servicio";
	}

	getArticulos(){
		return this._http.get(this.url);
	}
}
