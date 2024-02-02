import { Component } from '@angular/core';
import { RopaService } from '../services/ropa.service';
import { PeticionesServices } from '../services/peticiones.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  providers: [RopaService, PeticionesServices, HttpClient]
})

export class HomeComponent {
 
    public articulos$!:any;   //$ indica que es un observable y ! elimina los null e indefinidos 
   
    //constructor( private _ropaService: RopaService){}
    constructor( private _peticionesService: PeticionesServices,){}

    ngOnInit(){
      //console.log(this._ropaService.getRopa());
      console.log(this._peticionesService.getArticulos());
      //this.articulos$ = this._peticionesService.getArticulos();
		  this._peticionesService.getArticulos().subscribe({
			  next: result => {
          this.articulos$ = result;
          if(!this.articulos$){
            console.log("Error en el servidor");
          }
        },
        error: (e) => {
          var errorMessage = <any>Error;
          console.log(errorMessage);
        }});
    }
}
