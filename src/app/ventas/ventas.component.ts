import { Component, OnInit } from '@angular/core';
import {Venta} from '../models/venta.model';
import {VentaService} from '../shared/services/venta.service';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css']
})
export class VentasComponent implements OnInit {
  ventaLista: Venta[] = []
  productosLista = []
  importe: number = 0
  usuarioId = 1
  constructor(
    private ventaService: VentaService
  ) {
    this.listaVenta()
  }

  listaVenta(){

    this.ventaService.listVenta(this.usuarioId).subscribe(ventas => {
      console.log(ventas)
        this.ventaLista = ventas
      }
    )
  }



  ngOnInit() {

  }

}
