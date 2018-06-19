import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Usuario} from '../../models/usuario.model';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class VentaService {

  constructor(
    private http: HttpClient
  ) {

  }
  listVenta(idUsuario: number): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`/api/ventas?idUsuario=${idUsuario}`);
  }

}
