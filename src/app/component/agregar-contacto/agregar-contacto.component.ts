import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-agregar-contacto',
  templateUrl: './agregar-contacto.component.html',
  styleUrls: ['./agregar-contacto.component.css']
})
export class AgregarContactoComponent implements OnInit {

  formulario: FormGroup;

  constructor( private fb: FormBuilder) { 
    this.crearFormulario();
  }

  ngOnInit(): void {
  }

  crearFormulario(){
    this.formulario = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      descripcion: [''],
      sexo: [''],
      empresa: [''],
      email: ['', Validators.required],
      telefono: ['', Validators.required],
    });
  }

    guardar(){
      if(this.formulario.valid ){
        console.log(this.formulario.value);
      } else{
        console.log('Su formulario no es valido');
      }
    }

}