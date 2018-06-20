import {Producto} from './producto.model';

export interface Venta {
  idVenta : number,
  idUsuario: number,
  cliente: string,
  tipoComprobante: string,
  serieComprobante: number,
  numeroComprobante: number,
  importe: number,
  productos: Producto[]
}
