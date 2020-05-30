import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { UsuariosService } from '../../services/usuarios.service';

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

  constructor(
    public toastCtrl: ToastController,
    private userService: UsuariosService
    ) { }

  ngOnInit() {
  }

  registro() {
    console.log(usuario)
  }

  async presentToast() {

    const toast = await this.toastCtrl.create({
      message: 'Registro Exitoso',
      duration: 2000
    });
    toast.present();
  }

  registro() {
    this.userService.registrarNuevoUsuario(this.usuario).then(response => {
      console.log(response)
    })
  }

  async onSubmitTemplate(){
    console.log('form submit');
  }

}
