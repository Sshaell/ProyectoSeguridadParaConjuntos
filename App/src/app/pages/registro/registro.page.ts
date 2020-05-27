import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  valideUser = false;
  usuario =
    {
      nombreUsuario: '',
      apellidoUsuario: '',
      cedulaUsuario: '',
      casaUsuario: '',
      telefonoUsuario: '',
      contrasenaUsuario: ''
    };

  constructor(public toastCtrl: ToastController) { }

  ngOnInit() {
  }

  async presentToast() {

    const toast = await this.toastCtrl.create({
      message: 'Registro Exitoso',
      duration: 2000
    });
    toast.present();
  }

  async onSubmitTemplate(){
    console.log('form submit');
  }

}
