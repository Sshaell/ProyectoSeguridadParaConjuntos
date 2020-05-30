import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

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

  constructor(public toastCtrl: ToastController) { }

  ngOnInit() {
  }

  crear() {
    
  }

  async presentToast() {

    const toast = await this.toastCtrl.create({
      message: 'Cambio exitoso',
      duration: 2000
    });
    toast.present();
  }


}
