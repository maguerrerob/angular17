import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WatchlistComponent } from './watchlist/watchlist.component';
import { BuscadorComponent } from './buscador/buscador.component';
import { DetallesComponent } from './detalles/detalles.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: "watchlist", component: WatchlistComponent },
  { path: "buscador", component: BuscadorComponent },
  { path: "detalles/:movie_id", component: DetallesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
