import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EmpleadoComponent } from './empleado/empleado.component';
import { HomeComponent } from './home/home.component';
import { ArticulosComponent } from './articulos/articulos.component';
import { HeaderComponent } from './header/header.component';
import { WatchlistComponent } from './watchlist/watchlist.component';
import { BuscadorComponent } from './buscador/buscador.component';
import { DetallesComponent } from './detalles/detalles.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormularioComponent } from './formulario/formulario.component';
//import { PeticionesService } from './service/peticiones.service';

@NgModule({
  declarations: [
    AppComponent,
    EmpleadoComponent,
    HomeComponent,
    ArticulosComponent,
    HeaderComponent,
    WatchlistComponent,
    BuscadorComponent,
    DetallesComponent,
    FormularioComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  //providers: [PeticionesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
