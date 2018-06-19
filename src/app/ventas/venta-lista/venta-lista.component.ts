import {Component, Input, OnInit} from '@angular/core';
import {Venta} from '../../models/venta.model';

@Component({
  selector: 'app-venta-lista',
  templateUrl: './venta-lista.component.html',
  styleUrls: ['./venta-lista.component.css']
})
export class VentaListaComponent implements OnInit {
  @Input() ventaLista: Venta[];
  constructor() { }

  ngOnInit() {

  }

}
