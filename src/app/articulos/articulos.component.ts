import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PeticionesService } from '../service/peticiones.service';

@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.component.html',
  styleUrl: './articulos.component.scss',
  providers: [PeticionesService, HttpClient]
})
export class ArticulosComponent {
  public articulos$!:any;   //$ indica que es un observable y ! elimina los null e indefinidos 
    constructor( private _peticionesService: PeticionesService,){}

    ngOnInit(){
      console.log(this._peticionesService.getArticulos());
		  this._peticionesService.getArticulos().subscribe({
			  next: (result: any) => {
          this.articulos$ = result;
          if(!this.articulos$){
            console.log("Error en el servidor");
          }
        },
        error: (e: any) => {
          var errorMessage = <any>Error;
          console.log(errorMessage);
        }});
    }
}
