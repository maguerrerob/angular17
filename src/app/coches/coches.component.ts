import { Component } from '@angular/core';
import { Coche } from './coche';
import { ActivatedRoute, Params, Router } from '@angular/router'

@Component({
	selector: 'coches',
	templateUrl: 'coches.component.html',
})

export class CochesComponent{
	public coches: Array<Coche> =[new Coche("cactus","100","gris"),
	new Coche("corsa","100","negro"),
	new Coche("c3","100","rojo")];
	public nombre:any;

	constructor(
		private actRoute: ActivatedRoute,
		private _router: Router
	){
		//this.nombre = this.actRoute.snapshot.params['nombre'];
		//this.nombre = this.actRoute.snapshot.paramMap.get('nombre'); 
		this.actRoute.params.subscribe(
			(params: Params) => {
			  this.nombre = params['nombre'];
			}
		  );
	}

	ngOnInit(){}
	

	onSubmit(){
		//console.log(this.coche);
	}

	onBack(){
		this._router.navigate(['/coches']);
	}

}




