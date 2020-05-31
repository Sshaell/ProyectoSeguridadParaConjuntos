import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-control',
  templateUrl: './control.page.html',
  styleUrls: ['./control.page.scss'],
})
export class ControlPage implements OnInit {

  actividades: any[] = [
    {
      name: 'agregar'
    },
    {
      name: 'eliminar'
    },
    {
      name: 'actualizar'
    },
    {
      name: 'buscar'
    }
  ];

  tipos: any[] = [
    {
      name: 'usuario'
    },
    {
      name: 'celador'
    },
    {
      name: 'administrador'
    }
  ];

  recoleccion = {
    nombre: '',
    apellido: '',
    cedula: '',
    telefono : '',
    casa: '',
    turno: '',
    contrasena: '',
    tipo: '',
    accion: ''
  };

  constructor(public toastCtrl: ToastController, 
              private usuariosService: UsuariosService,
              private toast: ToastController) { }

  ngOnInit() {
  }

  crear() {
    switch (this.recoleccion.tipo){
      case 'usuario':
        switch (this.recoleccion.accion){
            case 'agregar':
            this.usuariosService.registrarNuevoUsuario(this.recoleccion).then ((Response) =>{
              if (Response < 0) {
                this.toast.create({
                  message: 'El usuario ya existe o es invalido',
                  duration: 3000,
                  color: 'danger'
                })
                .then((toast) => {
                  toast.present();
                });
              }
            });
            break;
        }
    }
  }

  async presentToast() {

    const toast = await this.toastCtrl.create({
      message: 'Cambio exitoso',
      duration: 2000
    });
    toast.present();
  }


}
