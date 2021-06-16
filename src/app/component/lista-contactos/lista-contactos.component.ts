import { Component, OnInit } from '@angular/core';
import { ContactosService } from 'src/app/servicio/contactos.service';

@Component({
  selector: 'app-lista-contactos',
  templateUrl: './lista-contactos.component.html',
  styleUrls: ['./lista-contactos.component.css']
})
export class ListaContactosComponent implements OnInit {

  contactos: any = {};

  constructor(private servicioContactos: ContactosService) { 
    this.contactos = servicioContactos.getContactos();
    console.log(this.contactos);
  }

  ngOnInit(): void {
  }

}
