import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarContactoComponent } from './component/agregar-contacto/agregar-contacto.component';
import { ListaContactosComponent } from './component/lista-contactos/lista-contactos.component';


const routes: Routes = [
  { path: 'agregarContacto', component: AgregarContactoComponent },
  { path: 'listaContactos', component: ListaContactosComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
