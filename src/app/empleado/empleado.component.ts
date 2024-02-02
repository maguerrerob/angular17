import { Component } from '@angular/core';
import { Empleado } from './empleado';

@Component({
  selector: 'app-empleado',
  standalone: false,
  //imports: [],
  templateUrl: './empleado.component.html',
  styleUrl: './empleado.component.scss'
})
export class EmpleadoComponent {
  public title = "Bienvenido empleado";
  public empleadoExt: Empleado;
  public trabajadores: Array<any>;
  public trabajadorExterno: boolean;
  public color:string;
	public color_seleccionado:string;

  constructor(){
    this.empleadoExt = new Empleado("Pedro", 47, false);
    this.trabajadores = [new Empleado("Marta",27, true),
                       new Empleado("Ana",43, true),
                       new Empleado("Alejandro",38, false)]
    this.trabajadorExterno=true;
    this.color = 'blue';
		this.color_seleccionado = '#ccc';
  }

  ngOnInit(){
    console.log(this.empleadoExt);
  }

  cambiarExterno(valor:boolean){
    this.trabajadorExterno = valor;
  }
}
