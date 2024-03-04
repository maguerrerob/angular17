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

  constructor(private PeticionesService: PeticionesService, private route: ActivatedRoute) { }
  
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const movieId = params['movie_id']; 
      
      this.PeticionesService.getMovieId(movieId).subscribe((data: any) => {
        this.movie = data.results;
      })
    })
  }
}
