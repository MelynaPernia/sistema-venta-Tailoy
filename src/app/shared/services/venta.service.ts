import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';

import {HttpClient} from '@angular/common/http';
import {Venta} from '../../models/venta.model';

@Injectable()
export class VentaService {

  constructor(
    private http: HttpClient
  ) {

  }
  listVenta(idUsuario: number): Observable<Venta[]> {
    return this.http.get<Venta[]>(`/api/ventas?idUsuario=${idUsuario}`);
  }
  guardarVenta(venta: Venta): Observable <Venta>{
    return this.http.post<Venta>('api/ventas', venta)
  }

}
