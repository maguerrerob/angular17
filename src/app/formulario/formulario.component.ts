import { Component } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { PeticionesService } from '../service/peticiones.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.scss'
})
export class FormularioComponent {

  public miformulario! : FormGroup;

  nombre: string = "";
  email: string = "";
  password1: string = "";
  password2: string = "";
  usuarioRegistrado: any


  constructor(private router: Router,
    private apiService: PeticionesService,
    // private registroService: RegistroService,
    public fb: FormBuilder,

    ) {
      this.miformulario = this.fb.group({
        nombre: ['', [Validators.required], Validators.maxLength(50)],
        email: ['', [Validators.required, Validators.email]],
        password1: ['', Validators.required],
        password2: ['', Validators.required]
      }, { validator: this.validacionesEXtra });
    }

    validacionesEXtra(formGroup: FormGroup) {
      const contra1 = formGroup.get("password1")?.value
      const contra2 = formGroup.get("password2")?.value
      if (contra1 != contra2){
        formGroup.get('password2')?.setErrors({ passwordMismatch: true });
      } else{
        formGroup.get('password2')?.setErrors(null);
      }
    }

    registroUsuario() {
      if (this.miformulario.valid) {
        const form = this.miformulario.value;
        const datos = {
          username: form.nombre,
          email: form.emfoail,
          password1: form.password1,
          password2: form.password2
        };
        this.apiService.registrarUsuario(datos).subscribe(response => {
          this.router.navigate(['']);
          console.log("Respuesta del servidor: ", response);
        }, error => {
          console.error("Error en el fomulario", error)
        })
        const usuarioRegistrado = datos["username"]
        this.apiService.setcompartirUsuarioRegistrado(usuarioRegistrado)
      }
    }
}
