import { Component, OnInit, Input } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

	@Input() titulo: string;
	constructor(private navCtrl:NavController) { }

	ngOnInit() { }

	logout() {
		localStorage.removeItem('id_usuario_logueado')
		localStorage.removeItem('tipo_usuario')
		this.navCtrl.navigateRoot('/')
	}

}
