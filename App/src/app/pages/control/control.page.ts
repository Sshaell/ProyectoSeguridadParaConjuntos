import { Component, OnInit } from '@angular/core';

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

  acciones = {
    accion: '',
    tipo: '',
    nombre: '',
    cedula: '',
    turno: '',
    casa: '',
  };

  constructor() { }

  ngOnInit() {
  }

}
