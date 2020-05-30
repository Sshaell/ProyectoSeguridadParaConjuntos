import { Component, OnInit, Output } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { Router, Routes, NavigationExtras } from '@angular/router';
import { UsuariosService } from '../../services/usuarios.service';

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
		cedulaUsuarioIniciarSesion: '',
		contrasenaUsuarioIniciarSesion: '',
		tipoUsuarioIniciarSesion: ''
	};

	constructor(
		public navCtrl: NavController,
		private router: Router,
		private usuarioService: UsuariosService,
		private toast: ToastController
	) { }

	ngOnInit() {
	}


	login() {
		switch (this.usuariosIniciarSesion.tipoUsuarioIniciarSesion) {
			case '/tabs':
				this.usuarioService.loginResidente(this.usuariosIniciarSesion).then(response => {
					//console.log(response)
					if (response > 0) {
						localStorage.setItem('id_usuario_logueado', '' + response)
						localStorage.setItem('tipo_usuario', 'residente')
						this.navCtrl.navigateRoot('tabs')
					}
					else {
						this.toast.create({
							message: "El usuario o contraseña es incorrecto",
							duration: 3000,
							color: "danger"
						}).then(toast => {
							toast.present()
						})
					}
				})
				break;
			case '/control':
				this.usuarioService.loginAdmin(this.usuariosIniciarSesion).then(response => {
					//console.log(response)
					if (response > 0) {
						localStorage.setItem('id_usuario_logueado', '' + response)
						localStorage.setItem('tipo_usuario', 'admin')
						this.navCtrl.navigateRoot('control')
					}
					else {
						this.toast.create({
							message: "El usuario o contraseña es incorrecto",
							duration: 3000,
							color: "danger"
						}).then(toast => {
							toast.present()
						})
					}
				})
		}
	}

	goTo() {
		const tiposUsuario = this.usuariosIniciarSesion.tipoUsuarioIniciarSesion;
		this.router.navigate([tiposUsuario])
	}

}
