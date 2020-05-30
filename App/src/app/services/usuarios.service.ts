import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class UsuariosService {

	httpOptions: any
	URL:string = 'http://localhost:8000'

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
			this.http.post('registro', data, this.httpOptions).subscribe(data => {
			  resolve(data);
			}, err => {
			  console.log(err);
			});
		  });
	}

}
