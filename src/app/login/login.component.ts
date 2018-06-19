import { Component, OnInit } from '@angular/core';
import {UsuarioService} from '../shared/services/usuario.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuarioId: number
  // usuarioForm
  usuarioForm: FormGroup //vinculando el formulario
  mensaje:string = 'Nombre de usuario o contraseña incorrecta'
  stateForm:boolean
  constructor(
    private usuarioService: UsuarioService,
    private fb: FormBuilder,
    private router: Router
  )
  {
    this.stateForm = false;
  }

  ngOnInit() {
    this.buildFormUsuario()
  }

  onSubmit(){
    this.usuarioService.getUsuario(this.usuarioForm.value).subscribe(
      usuario => {
        (usuario.length)? this.router.navigate(['orders']) : this.stateForm=true
      }
    )
  }
  buildFormUsuario(){
    this.usuarioForm = this.fb.group(
      {
        usuario: ['', Validators.required],
        contrasenna: ['',Validators.required]
      }
    )
  }
}
