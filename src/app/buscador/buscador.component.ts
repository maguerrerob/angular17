import { Component } from '@angular/core';
import { PeticionesService } from '../service/peticiones.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrl: './buscador.component.scss',
  providers: [PeticionesService]
})
export class BuscadorComponent {
  movies: any[] = [];

  constructor(private PeticionesService: PeticionesService) { }

  buscarPeliculas(cadena: string) {
    this.PeticionesService.getMoviesBuscador(cadena)
      .subscribe((data) => {
        // Manejar la respuesta de la llamada a la función del servicio aquí
        console.log(data);
      }, (error) => {
        console.error(error);
      });
  }
  
}
