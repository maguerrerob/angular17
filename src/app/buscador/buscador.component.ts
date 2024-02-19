import { Component } from '@angular/core';
import { PeticionesService } from '../service/peticiones.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrl: './buscador.component.scss',
  providers: [PeticionesService]
})
export class BuscadorComponent {
  searchQuery: string = '';
  movies: any[] = [];

  constructor(private buscador: PeticionesService) { }

  searchMovies() {
    this.buscador.getMoviesBuscador(this.searchQuery).subscribe((response: any) => {
      this.movies = response.results;
    });
  }
}
