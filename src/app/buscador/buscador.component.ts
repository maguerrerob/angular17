import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../service/peticiones.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrl: './buscador.component.scss',
  providers: [PeticionesService]
})
export class BuscadorComponent {
  searchQuery!: string;
  movies: any[] = [];

  constructor(private ejemplo: PeticionesService) { }

  ngOnInit(): void {
    this.searchQuery = this.ejemplo.searchQuery;
    this.getMoviesBuscador(this.searchQuery)
  }

  ngDoCheck () {
    if(this.searchQuery != this.ejemplo.searchQuery){
      this.searchQuery = this.ejemplo.searchQuery;
      this.getMoviesBuscador(this.searchQuery);
    }
  }

  getMoviesBuscador(query: string): void {
    this.ejemplo.getMoviesBuscador(query).subscribe(data => {
      this.movies = data.results;
    }, error => {
      console.error(error);
    });
  }
}
