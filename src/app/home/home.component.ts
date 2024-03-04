import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../service/peticiones.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  providers: [PeticionesService]
})

export class HomeComponent implements OnInit {

  movies: any[] = [];
  moviesTopRated: any[] = [];

  constructor(private PeticionesService: PeticionesService) { }

  ngOnInit(): void {
    this.PeticionesService.getPopularMovies().subscribe((data: any) => {
      this.movies = data.results.slice(0, 3);
      this.moviesTopRated = data.results
    });
  }

}

  // public articulos$!:any;

  // constructor( private _peticionesService: PeticionesService,){}

  // ngOnInit(){
  //   //console.log(this._ropaService.getRopa());
    
  //   //this.articulos$ = this._peticionesService.getArticulos();
  //   this._peticionesService.getArticulos().subscribe({
  //     next: (result: any) => {
  //       this.articulos$ = result;
  //       if(!this.articulos$){
  //         console.log("Error en el servidor");
  //       }
  //     },
  //     error: (e: any) => {
  //       var errorMessage = <any>Error;
  //       //console.log(errorMessage);
  //     }});
  // }
