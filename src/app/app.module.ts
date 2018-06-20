import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {VentasComponent} from './ventas/ventas.component';


// No va
import {VentaNuevaComponent} from "./ventas/venta-nueva/venta-nueva.component";
import {VentaListaComponent} from './ventas/venta-lista/venta-lista.component';
import {VentaDetalleComponent} from './ventas/venta-detalle/venta-detalle.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {UsuarioService} from './shared/services/usuario.service';
import {HttpClientModule} from '@angular/common/http';
import {VentaService} from './shared/services/venta.service';



const routes: Routes =  [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
// solo ejemplos
  {
    path: 'orders',
    component: VentasComponent
  },
  {
    path: 'new',
    component: VentaNuevaComponent
  },
  {
    path: 'detalle/:id',
    component: VentaDetalleComponent
  },
  // {
  //   path: '',
  //   component: VentasComponent,
  //   children: [
  //     {
  //       path: '',
  //       loadChildren: './ventas/venta.module#VentaMdule'
  //
  //     }
  //   ]
  // }
]


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    VentasComponent,

    //no va
    VentaListaComponent,
    VentaNuevaComponent,
    VentaDetalleComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [UsuarioService, VentaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
