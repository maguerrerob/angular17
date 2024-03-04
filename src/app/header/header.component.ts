import { Component } from '@angular/core';
import { Router} from '@angular/router';
import { PeticionesService } from '../service/peticiones.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})

export class HeaderComponent {
  public searchQuery: string = "";
  constructor(private router: Router, private PeticionesService: PeticionesService) {}

  compartirsearchQuery() {
    this.PeticionesService.setcompartirsearchQuery(this.searchQuery);
    this.router.navigate(['/buscador']);
  }
}