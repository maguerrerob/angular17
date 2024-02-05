import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ArticulosComponent } from './articulos/articulos.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: "articulos", component: ArticulosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
