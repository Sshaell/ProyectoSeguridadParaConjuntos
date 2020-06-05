import { Component, OnInit, Input } from '@angular/core';
import { IniciarSesionPage } from '../iniciar-sesion/iniciar-sesion.page';
import { EstadoPage } from '../estado/estado.page';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-mostrar-usuario',
  templateUrl: './mostrar-usuario.page.html',
  styleUrls: ['./mostrar-usuario.page.scss'],
})
export class MostrarUsuarioPage implements OnInit {

   registros: any;
   intervalo: any;

  constructor(private route: ActivatedRoute, private router: Router, private userServices: UsuariosService ) { }


  ngOnInit() {
    this.intervalo = setInterval(() => {
      this.userServices.mostrarRegistros().then((response) => {
        //console.log(response)
        this.registros = response
      });
  }, 5000 );

  }

}
