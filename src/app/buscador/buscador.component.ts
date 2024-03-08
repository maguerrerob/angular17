import { Component } from '@angular/core';
import { PeticionesService } from '../service/peticiones.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrl: './buscador.component.scss'
})
export class BuscadorComponent {
  searchQuery: string = "";
  movies: any

  constructor(private ServicesPeticiones: PeticionesService) { }

  // ngDoCheck () {
  //   if(){
  //     this.getMovie(this.searchQuery);
  //   }
  // }

  getMovie(query:any): void {
    this.ServicesPeticiones.getMoviesBuscador(query).subscribe(data => {
      this.movies = data.results
    })
  }

  addWatchlist(movieId:any){
    this.ServicesPeticiones.postWatchlist(movieId).subscribe(response => {
      console.log("Respuesta del servidor: ", response);
      window.location.reload();
    }, error => {
      console.error("Error en la solicitus POST", error)
    }
  )}
}
