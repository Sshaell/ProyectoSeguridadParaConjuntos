import { Component, OnInit, Input, Output } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import { UsuariosService } from '../../services/usuarios.service';



@Component({
  selector: 'app-estado',
  templateUrl: './estado.page.html',
  styleUrls: ['./estado.page.scss'],
})
export class EstadoPage implements OnInit {

  usuario: any = {
    id_usuario: parseInt(localStorage.getItem('id_usuario_logueado'), 10),
    entrada: 'entrar'
  };

  constructor(public alertCtrl: AlertController, 
              private router: Router, 
              private usuariosService: UsuariosService,
              private toast: ToastController){}

  ngOnInit() {

  }

  presentInput(){
    console.log(this.usuario);
    this.usuariosService.enviarIdUsuario(this.usuario).then((Response) =>{
      if (Response["id"]) {
        this.toast.create({
          message: 'Bienvenido a Casa',
          duration: 3000,
        })
        .then((toast) => {
          toast.present();
        });
      } else {
        this.toast.create({
          message: 'Surgió un problema, vuelve a intentar',
          duration: 3000,
          color: 'danger'
        })
        .then((toast) =>{
          toast.present()
        });
      }
    });
  }

  /*async presentInput( ) {
    const input = await this.alertCtrl.create({
      header: 'Ingreso clave dinamica',
      inputs: [
        {
          name: 'clave dinámica',
          type: 'number',
          placeholder: 'ingrese su clave dinamica'
        }
      ],
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        cssClass: 'secondary',
        handler: () => {
          console.log('Confirm Cancel');
        }
      },
      {
        text: 'Ok',
        handler: (data) => {
          console.log('Confirm Ok', data);
          this.claveIngresada = data.name;
        }
      }
    ]
  }); 

    if (this.claveIngresada === this.dinamica) {
      this.entradaValida = true;
    }
    else {
      this.entradaValida = false;
    }
    await input.present();
}
 */

}
