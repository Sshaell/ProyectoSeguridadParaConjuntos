import { Component, OnInit, Input, Output } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-estado',
  templateUrl: './estado.page.html',
  styleUrls: ['./estado.page.scss'],
})
export class EstadoPage implements OnInit {

  dinamica: number = 1234;
  claveIngresada: number;
  entradaValida: boolean = false;
  


  constructor(public alertCtrl: AlertController, private router: Router){}

  ngOnInit() {
  }
  async presentInput( ) {
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
    this.sendIt();
    await input.present();
}

  sendIt(){
    let navigationExtras: NavigationExtras = {
      queryParams: {
        special: JSON.stringify(this.entradaValida)
      }
    };
    this.router.navigate(['/mostrar-usuario'], navigationExtras);
  }


}
