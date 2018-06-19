import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VentasComponent } from './ventas.component';
import {VentaListaComponent} from './venta-lista/venta-lista.component';
import {VentaDetalleComponent} from './venta-detalle/venta-detalle.component';
import {VentaNuevaComponent} from './venta-nueva/venta-nueva.component';
import {RouterModule, Routes} from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: VentasComponent
  },
  {
    path: 'new',
    component: VentaNuevaComponent
  },
  {
    path: ':id/detail'
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [VentasComponent,
    VentaListaComponent,
    VentaDetalleComponent,
    VentaNuevaComponent,
    VentasComponent]
})
export class VentaModule { }
