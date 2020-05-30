import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { NavController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private navCtrl:NavController){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let tipo = localStorage.getItem('tipo_usuario')
    switch (tipo){
      case 'admin':
        this.navCtrl.navigateRoot('control')
        return false
      case 'residente':
        this.navCtrl.navigateRoot('tabs')
        return false
      default:
        return true;

    }
  }
  
}
