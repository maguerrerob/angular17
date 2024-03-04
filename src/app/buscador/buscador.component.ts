import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../service/peticiones.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrl: './buscador.component.scss',
  providers: [PeticionesService]
})
export class BuscadorComponent implements OnInit {
  searchQuery!: string;
  movies: any[] = [];

  constructor(private PeticionesService: PeticionesService) { }

  ngOnInit(): void {
    this.searchQuery = this.PeticionesService.searchQuery;
    this.getMoviesBuscador(this.searchQuery)
  }

  ngDoCheck () {
    if(this.searchQuery != this.PeticionesService.searchQuery){
      this.searchQuery = this.PeticionesService.searchQuery;
      this.getMoviesBuscador(this.searchQuery);
    }
  }

  getMoviesBuscador(query: string): void {
    this.PeticionesService.getMoviesBuscador(query).subscribe(data => {
      this.movies = data.results;
    }, error => {
      console.error(error);
    });
  }
}
