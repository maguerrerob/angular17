import { Component } from '@angular/core';
import { Router} from '@angular/router';
import { PeticionesService } from '../service/peticiones.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  providers: [PeticionesService]
})

export class HeaderComponent {
  public searchQuery: string = "";
  constructor(private router: Router, private peticionesService: PeticionesService) {}

  // compartirsearchQuery() {
  //   this.peticionesService.setcompartirsearchQuery(this.searchQuery);
  //   this.router.navigate(['/buscador']);
  // }
}