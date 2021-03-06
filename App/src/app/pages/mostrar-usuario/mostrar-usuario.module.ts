import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MostrarUsuarioPageRoutingModule } from './mostrar-usuario-routing.module';

import { MostrarUsuarioPage } from './mostrar-usuario.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MostrarUsuarioPageRoutingModule,
    ComponentsModule
  ],
  declarations: [MostrarUsuarioPage]
})
export class MostrarUsuarioPageModule {}
