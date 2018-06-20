import {Component, OnInit, ViewChild} from '@angular/core';
import {VentaService} from '../../shared/services/venta.service';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Producto} from '../../models/producto.model';
// import {Venta} from '../../models/venta.model';
// import {Producto} from '../../models/producto.model';

@Component({
  selector: 'app-venta-nueva',
  templateUrl: './venta-nueva.component.html',
  styleUrls: ['./venta-nueva.component.css']
})
export class VentaNuevaComponent implements OnInit {

  ventaForm: FormGroup; //vinculando

  listaProducto: Producto[]=[];

  constructor(
    private fb: FormBuilder,
    private ventaService: VentaService
  )
  {
    this.buildVentaForm()

  }

  buildVentaForm(){
    this.ventaForm = this.fb.group({
        cliente: ['',Validators.required],
        tipoComprobante: ['',Validators.required],
        serieComprobante: ['',Validators.required],
        numeroComprobante: ['',Validators.required],
        producto: this.fb.array([])
      }
    )

  }
  onSubmit(){

  }


  ngOnInit() {

  }

  getValueInput(nameFormArray, nameInput){
    return this.ventaForm.get(`${nameFormArray}.${nameInput}`).value
  }

  addProducto(){
    console.log(this.ventaForm.get('producto'))

    // this.listaProducto.push(this.ventaForm.value('producto'))
    // const producto = this.getValueInput('productos','producto');
    // const precio = this.getValueInput('productos','precio');
    // const cantidad = this.getValueInput('productos', 'cantidad');
    // const obj = {
    //   'producto': producto,
    //   'precio': precio,
    //   'cantidad': cantidad
    // }
    // this.listaProducto.push(obj)
    // console.log(this.listaProducto)

  }
  eliminarProducto(producto: Producto) {
    console.log(producto)
    // this.listaProducto = this.listaProducto.filter((item) => item.producto !== producto.producto);
  }

}
