import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.page.html',
  styleUrls: ['./noticias.page.scss'],
})
export class NoticiasPage implements OnInit {

  noticias: Noticia[] = [
    {
      titulo: 'Pago administración',
      texto: 'Recuerde hacer el pago de la administración en los primeros cincos días del mes'
    },
    {
      titulo: 'Reunión del conjunto',
      texto: 'Recuerde asistir a la reunión de la unidad el segundo domingo de cada mes'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}

interface Noticia {
  titulo: string;
  texto: string;
}
