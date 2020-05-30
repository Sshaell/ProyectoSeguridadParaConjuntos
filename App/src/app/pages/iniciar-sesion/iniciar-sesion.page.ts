import { Component, OnInit, Output } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router, Routes, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.page.html',
  styleUrls: ['./iniciar-sesion.page.scss'],
})
export class IniciarSesionPage implements OnInit {

  tipos = [
    {
      name: 'administrador',
      link: '/control'
    },
    {
      name: 'celador',
      link: '/mostrar-usuario'
    },
    {
      name: 'usuario',
      link: '/tabs'
    }
  ];

  usuariosIniciarSesion = {
    nombreUsuarioIniciarSesion: '',
    cedulaUsuarioIniciarSesion: '',
    contrasenaUsuarioIniciarSesion: '',
    tipoUsuarioIniciarSesion: ''
  };

  constructor(public navCtrl: NavController, private router: Router) { }

  ngOnInit() {
  }


  goTo(){
    const tiposUsuario = this.usuariosIniciarSesion.tipoUsuarioIniciarSesion;
    this.router.navigate([tiposUsuario])
  }
