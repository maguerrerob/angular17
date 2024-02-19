import { Component } from '@angular/core';
import { PeticionesService } from '../service/peticiones.service';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrl: './detalles.component.scss',
  providers: [PeticionesService]
})
export class DetallesComponent {
  searchQuery: string = '';
  movie: any[] = [];

  constructor(private PeticionesService: PeticionesService) { }
  
  ngOnInit(): void {
    this.PeticionesService.getMoviesBuscador(this.searchQuery).subscribe((data: any) => {
      this.movie = data.results;
    });
  }
}
