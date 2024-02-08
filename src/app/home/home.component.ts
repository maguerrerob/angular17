import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PeticionesService } from '../service/peticiones.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  providers: [PeticionesService, HttpClient]
})

export class HomeComponent {
  mensaje: string = 'Hola Mundo';
  
  // public articulos$!:any;

  // constructor( private _peticionesService: PeticionesService,){}

  // ngOnInit(){
  //   //console.log(this._ropaService.getRopa());
    
  //   //this.articulos$ = this._peticionesService.getArticulos();
  //   this._peticionesService.getArticulos().subscribe({
  //     next: (result) => {
  //       this.articulos$ = result;
  //       if(!this.articulos$){
  //         console.log("Error en el servidor");
  //       }
  //     },
  //     error: (e) => {
  //       var errorMessage = <any>Error;
  //       //console.log(errorMessage);
  //     }});
  // }
}