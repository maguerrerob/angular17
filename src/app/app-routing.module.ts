import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpleadoComponent } from './empleado/empleado.component';
import { HomeComponent } from './home/home.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { CochesComponent } from './coches/coches.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'empleado', component: EmpleadoComponent },
  { path: 'noticias', component: NoticiasComponent },
  { path: 'coches', component: CochesComponent },
  { path: 'coches/:nombre', component: CochesComponent },
  { path: '', component: HomeComponent },
  { path: '**', component: HomeComponent },
  { path: 'home', outlet: 'secondary', component: HomeComponent },
  { path: 'noticias', outlet: 'secondary', component: NoticiasComponent },
  { path: 'empleado', outlet: 'secondary', component: EmpleadoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})

export class AppRoutingModule { 
  
}
