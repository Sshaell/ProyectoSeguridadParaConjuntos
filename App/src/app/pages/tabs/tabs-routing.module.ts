import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'noticias'
  },
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'noticias',
        loadChildren: '../noticias/noticias.module#NoticiasPageModule'
      },
      {
        path: 'estado',
        loadChildren: '../estado/estado.module#EstadoPageModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
