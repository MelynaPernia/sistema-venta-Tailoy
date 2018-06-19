import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-venta-detalle',
  templateUrl: './venta-detalle.component.html',
  styleUrls: ['./venta-detalle.component.css']
})
export class VentaDetalleComponent implements OnInit {
  // ventaForm = FormGroup
  ventaId

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute
  ) {
    this.ventaId = this.route.snapshot.params['id']
  }

  ngOnInit() {
    console.log(this.ventaId)
  }
  onSubmit()
  {

  }



}
