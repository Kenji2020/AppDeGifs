import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifsAppComponent } from './gifs-app/gifs-app.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { ResultadoComponent } from './resultado/resultado.component';



@NgModule({
  declarations: [
    GifsAppComponent,
    BusquedaComponent,
    ResultadoComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    GifsAppComponent
  ]
})
export class GifsModule { }
