import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class UsuariosService {
  httpOptions: any;
  URL: string = "http://localhost:8000/";

  constructor(private http: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "aplication/json",
      }),
    };
  }

  registrarNuevoUsuario(data) {
    return new Promise((resolve) => {
      //console.log(this.httpOptions)
      this.http
        .post(this.URL + "api/registro", data, this.httpOptions)
        .subscribe(
          (data) => {
            resolve(data);
          },
          (err) => {
            console.log(err);
          }
        );
    });
  }

  loginResidente(data) {
    return new Promise((resolve) => {
      //console.log(this.httpOptions)
      this.http
        .post(this.URL + "api/login_residente", data, this.httpOptions)
        .subscribe(
          (data) => {
            resolve(data);
          },
          (err) => {
            console.log(err);
            resolve(-1);
          }
        );
    });
  }

  loginAdmin(data) {
    return new Promise((resolve) => {
      //console.log(this.httpOptions)
      this.http
        .post(this.URL + "api/login_admin", data, this.httpOptions)
        .subscribe(
          (data) => {
            resolve(data);
          },
          (err) => {
            console.log(err);
            resolve(-1);
          }
        );
    });
  }

  loginCelador(data) {
    return new Promise((resolve) => {
      // console.log(this.httpOptions)
      this.http
        .post(this.URL + "api/login_celador", data, this.httpOptions)
        .subscribe(
          (data) => {
            resolve(data);
          },
          (err) => {
            console.log(err);
            resolve(-1);
          }
        );
    });
  }

  crearCelador(data) {
    return new Promise((resolve) => {
      // console.log(this.httpOptions)
      this.http
        .post(this.URL + "api/crear_celador", data, this.httpOptions)
        .subscribe(
          (data) => {
            resolve(data);
          },
          (err) => {
            console.log(err);
            resolve(-1);
          }
        );
    });
  }

  CrearResidente(data) {
    return new Promise((resolve) => {
      // console.log(this.httpOptions)
      this.http
        .post(this.URL + "api/crear_residente", data, this.httpOptions)
        .subscribe(
          (data) => {
            resolve(data);
          },
          (err) => {
            console.log(err);
            resolve(-1);
          }
        );
    });
  }

  borrarResidente(data) {
    return new Promise((resolve) => {
      // console.log(this.httpOptions)
      this.http
        .post(this.URL + "api/borrar_residente", data, this.httpOptions)
        .subscribe(
          (data) => {
            resolve(data);
          },
          (err) => {
            console.log(err);
            resolve(-1);
          }
        );
    });
  }

  actualizarResidente(data) {
    return new Promise((resolve) => {
      // console.log(this.httpOptions)
      this.http
        .post(this.URL + "api/actualizar_residente", data, this.httpOptions)
        .subscribe(
          (data) => {
            resolve(data);
          },
          (err) => {
            console.log(err);
            resolve(-1);
          }
        );
    });
  }

  crearAdministrador(data) {
    return new Promise((resolve) => {
      // console.log(this.httpOptions)
      this.http
        .post(this.URL + "api/crear_administrador", data, this.httpOptions)
        .subscribe(
          (data) => {
            resolve(data);
          },
          (err) => {
            console.log(err);
            resolve(-1);
          }
        );
    });
  }
  borrarAdministrador(data) {
    return new Promise((resolve) => {
      // console.log(this.httpOptions)
      this.http
        .post(this.URL + "api/borrar_administrador", data, this.httpOptions)
        .subscribe(
          (data) => {
            resolve(data);
          },
          (err) => {
            console.log(err);
            resolve(-1);
          }
        );
    });
  }
  actualizarAdministrador(data) {
    return new Promise((resolve) => {
      // console.log(this.httpOptions)
      this.http
        .post(this.URL + "api/actualizar_administrador", data, this.httpOptions)
        .subscribe(
          (data) => {
            resolve(data);
          },
          (err) => {
            console.log(err);
            resolve(-1);
          }
        );
    });
  }

  borrarCelador(data) {
    return new Promise((resolve) => {
      // console.log(this.httpOptions)
      this.http
        .post(this.URL + "api/borrar_celador", data, this.httpOptions)
        .subscribe(
          (data) => {
            resolve(data);
          },
          (err) => {
            console.log(err);
            resolve(-1);
          }
        );
    });
  }

  actualizarCelador(data) {
    return new Promise((resolve) => {
      // console.log(this.httpOptions)
      this.http
        .post(this.URL + "api/actualizar_celador", data, this.httpOptions)
        .subscribe(
          (data) => {
            resolve(data);
          },
          (err) => {
            console.log(err);
            resolve(-1);
          }
        );
    });
  }


}
