import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.page.html',
  styleUrls: ['./iniciar-sesion.page.scss'],
})
export class IniciarSesionPage implements OnInit {

  tipos: any[] = [
    {
      name: 'administrador',
      link: '/noticias'
    },
    {
      name: 'celador',
      link: '/controlUsuarios'
    },
    {
      name: 'usario',
      link: '/noticias'
    }
  ];

  usuariosIniciarSesion = {
    nombreUsuarioIniciarSesion: '',
    contrasenaUsuarioIniciarSesion: '',
    tipoUsuarioIniciarSesion: ''
  };

  constructor() { }

  ngOnInit() {
  }

}
