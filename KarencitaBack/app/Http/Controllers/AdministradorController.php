<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Administrador;
use App\Celador;

class AdministradorController extends Controller
{
    public function login(Request $request){
        $usuario = Administrador::where('cedula',$request['cedulaUsuarioIniciarSesion'])->where('contrasena',md5($request['contrasenaUsuarioIniciarSesion']))->first()->get();

        return response()->json($usuario[0]->id);
    }

    public function crearCelacho(Request $request){
        $usuario = new Celador;

        $usuario->nombre = $request['nombre'];
        $usuario->apellidos = $request['apellido'];
        $usuario->cedula = $request['cedula'];
        $usuario->contrasena = md5($request['contrasena']);
        $usuario->turno = $request['turno'];

        $usuario->save();
    }
}
