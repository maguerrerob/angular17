import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../service/peticiones.service';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrl: './watchlist.component.scss'
})
export class WatchlistComponent implements OnInit {
  movies: any

  constructor(private ServicePeticiones: PeticionesService) { }

  ngOnInit(): void {
    this.ServicePeticiones.getWatchlist().subscribe((data:any) => {
      this.movies = data.results
    })
  }

  delWatchlist(movieId:any){
    this.ServicePeticiones.delWatchlist(movieId).subscribe(response => {
      console.log("Respuesta del servidor: ", response);
      window.location.reload();
    }, error => {
      console.error("Error en la solicitus de DELETE", error)
    }
  )}
}
