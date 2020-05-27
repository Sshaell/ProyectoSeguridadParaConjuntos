import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mostrar-usuario',
  templateUrl: './mostrar-usuario.page.html',
  styleUrls: ['./mostrar-usuario.page.scss'],
})
export class MostrarUsuarioPage implements OnInit {

  @Input() usuario : any[] = [
    {
      nombre: 'alguine',
      apellido: 'asd',
      cedula: 'fdgg',
      casa: 'asda',
      telefono: 'werwer234'
    }
  ];


  constructor() { }

  ngOnInit() {
  }

  setUsuario(usuario){
    this.usuario.push(usuario);
  }

}
