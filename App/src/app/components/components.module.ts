import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsComponent } from './tabs/tabs.component';
import { IonicModule } from '@ionic/angular';
import { Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';

const routes: Routes = [
  {
    path: '',
    component: TabsComponent,
    children: [
      {
        path: 'noticias',
        loadChildren: './pages/noticias/noticias.module#NoticiasPageRoutingModule'
      },
      {
        path: 'estado',
        loadChildren: './pages/estado/estado.module#EstadoPageRoutingModule'
      }
    ]
  }
];


@NgModule({
  declarations: [TabsComponent, HeaderComponent],
  imports: [CommonModule, IonicModule],
  exports: [TabsComponent, HeaderComponent],
})
export class ComponentsModule { }
