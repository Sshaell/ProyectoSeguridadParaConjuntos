import { Component, OnInit, Input } from '@angular/core';
import { IniciarSesionPage } from '../iniciar-sesion/iniciar-sesion.page';
import { EstadoPage } from '../estado/estado.page';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-mostrar-usuario',
  templateUrl: './mostrar-usuario.page.html',
  styleUrls: ['./mostrar-usuario.page.scss'],
})
export class MostrarUsuarioPage implements OnInit {

   usuario:
    {
      cedula: '' ,
      acceso: '',
      casa: '',
    };


  constructor(private route: ActivatedRoute, private router: Router ) { }

  ngOnInit() {
  }

}
