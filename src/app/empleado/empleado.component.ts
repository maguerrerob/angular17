import { Component } from '@angular/core';
import { Empleado } from './empleado';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrl: './empleado.component.scss'
})
export class EmpleadoComponent {
  public title = "Bienvenido empleado";
  public empleado:Empleado

  constructor(){
    this.empleado = new Empleado("Manuel",22, "Mamporrero", true)
  }
  ngOnInit(){
    console.log(this.empleado)
  }
}
