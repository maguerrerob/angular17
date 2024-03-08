import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../service/peticiones.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrl: './detalles.component.scss',
  providers: [PeticionesService]
})

export class DetallesComponent implements OnInit {
  movie: any;
  id: any;
  providersmovie: any;

  constructor(private ServicePeticion: PeticionesService, private route: ActivatedRoute) { }
  
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const movieId = params['movie_id'];
      // this.id = params['movie_id']
      this.ServicePeticion.getMovieId(movieId).subscribe((data: any) => {
        this.movie = data;
        this.providersmovie = data['watch/providers'].results.ES;
      })
    })
  }

  addWatchlist(movieId:any){
    this.ServicePeticion.postWatchlist(movieId).subscribe(response => {
      console.log("Respuesta del servidor: ", response);
      window.location.reload();
    }, error => {
      console.error("Error en la solicitus POST", error)
    }
  )}
  
}
