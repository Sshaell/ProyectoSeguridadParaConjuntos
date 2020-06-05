import { Component, OnInit } from "@angular/core";
import { ToastController, NavController } from "@ionic/angular";
import { UsuariosService } from "../../services/usuarios.service";





@Component({
  selector: "app-registro",
  templateUrl: "./registro.page.html",
  styleUrls: ["./registro.page.scss"],
})

export class RegistroPage implements OnInit {


  valideUser = false;
  usuario = {
    nombreUsuario: '',
    apellidoUsuario: '',
    cedulaUsuario: '',
    casaUsuario: '',
    telefonoUsuario: '',
    contrasenaUsuario: ''
  };

  constructor(
    public toastCtrl: ToastController,
    private userService: UsuariosService,
    private navCtrl: NavController,
  ) {}

  ngOnInit() {}


  registro() {
    this.userService.registrarNuevoUsuario(this.usuario).then((response) => {
      //console.log(response)
      if (response["id"]) {
        localStorage.setItem("id_usuario_logueado", "" + response["id"]);
        localStorage.setItem("tipo_usuario", "residente");
        this.navCtrl.navigateRoot("tabs");
      } else {
        this.toastCtrl
          .create({
            message: "El usuario ya se encuentra repetido",
            duration: 3000,
            color: "danger",
          })
          .then((toast) => {
            toast.present();
          });
      }
    });
  }

}
