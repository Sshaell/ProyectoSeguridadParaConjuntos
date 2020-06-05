import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from './header/header.component';
import { BackButtonComponent } from './back-button/back-button.component';

@NgModule({
  declarations: [BackButtonComponent, HeaderComponent],
  imports: [CommonModule, IonicModule],
  exports: [BackButtonComponent, HeaderComponent],
})
export class ComponentsModule { }
