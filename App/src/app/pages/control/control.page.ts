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
            //console.log(this.recoleccion);
            this.usuariosService.CrearResidente(this.recoleccion).then ((Response) =>{
              if (Response["id"]) {
                this.toast.create({
                  message: 'El usuario fue creado con exito',
                  duration: 3000,
                })
                .then((toast) => {
                  toast.present();
                });
              } else {
                this.toast.create({
                  message: 'El usuario ya existe o es invalido',
                  duration: 3000,
                  color: 'danger'
                })
                .then((toast) =>{
                  toast.present()
                });
              }
            });
            break;

            case 'eliminar':
              this.usuariosService.borrarResidente(this.recoleccion).then ((Response) => {});
              break;

            case 'actualizar':
              this.usuariosService.actualizarResidente(this.recoleccion).then ((Response) => {});
              break;
        }
        break;

      case 'administrador':
        switch (this.recoleccion.accion){
          case 'agregar':
            this.usuariosService.crearAdministrador(this.recoleccion).then ((Response) =>{
              if (Response["id"]) {
                this.toast.create({
                  message: 'El usuario fue creado con exito',
                  duration: 3000,
                })
                .then((toast) => {
                  toast.present();
                });
              } else {
                this.toast.create({
                  message: 'El usuario ya existe o es invalido',
                  duration: 3000,
                  color: 'danger'
                })
                .then((toast) =>{
                  toast.present()
                });
              }
            });
            break;

            case 'eliminar':
              this.usuariosService.borrarAdministrador(this.recoleccion).then ((Response) => {});
              break;

            case 'actualizar':
              this.usuariosService.actualizarAdministrador(this.recoleccion).then ((Response) => {});
              break;
        }
        break;

        case 'celador':
          switch (this.recoleccion.accion){
            case 'agregar':
              //console.log(this.recoleccion);
              this.usuariosService.crearCelador(this.recoleccion).then ((Response) =>{
                if (Response["id"]) {
                  this.toast.create({
                    message: 'El usuario fue creado con exito',
                    duration: 3000,
                  })
                  .then((toast) => {
                    toast.present();
                  });
                } else {
                  this.toast.create({
                    message: 'El usuario ya existe o es invalido',
                    duration: 3000,
                    color: 'danger'
                  })
                  .then((toast) =>{
                    toast.present()
                  });
                }
              });
              break;

              case 'eliminar':
                this.usuariosService.borrarCelador(this.recoleccion).then ((Response) => {});
                break;

              case 'actualizar':
                this.usuariosService.actualizarCelador(this.recoleccion).then ((Response) => {});
                break;
            }
    }
  }



}
