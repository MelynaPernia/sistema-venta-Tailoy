import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Usuario} from '../../models/usuario.model';

@Injectable()
export class UsuarioService {

  constructor(private http: HttpClient) {
  }

  getUsuario(obj): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`/api/usuario?usuario=${obj.usuario}&contrasenna=${obj.contrasenna}`);
  }

}
