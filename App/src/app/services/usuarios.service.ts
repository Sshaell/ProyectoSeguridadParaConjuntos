import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class UsuariosService {

	httpOptions: any
	URL:string = 'http://192.168.1.5:8000/'

	constructor(private http: HttpClient) {
		this.httpOptions = {
			headers: new HttpHeaders({
				'Content-Type': 'aplication/json'
			})
		}
	}

	registrarNuevoUsuario(data) {
		return new Promise(resolve => {
			//console.log(this.httpOptions)
			this.http.post(this.URL+'api/registro', data, this.httpOptions).subscribe(data => {
			  resolve(data);
			}, err => {
			  console.log(err);
			});
		  });
	}

	loginResidente(data) {
		return new Promise(resolve => {
			//console.log(this.httpOptions)
			this.http.post(this.URL+'api/login_residente', data, this.httpOptions).subscribe(data => {
			  resolve(data);
			}, err => {
			  console.log(err);
			  resolve(-1)
			});
		  });
	}

	loginAdmin(data) {
		return new Promise(resolve => {
			//console.log(this.httpOptions)
			this.http.post(this.URL+'api/login_admin', data, this.httpOptions).subscribe(data => {
			  resolve(data);
			}, err => {
			  console.log(err);
			  resolve(-1)
			});
		  });
	}

}