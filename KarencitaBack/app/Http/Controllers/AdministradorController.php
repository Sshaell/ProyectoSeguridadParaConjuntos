<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Administrador;
use App\Celador;
use App\Residente;

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

    public function crearResidente(Request $request){
        $usuario = new Residente;

        $usuario->nombre = $request['nombre'];
        $usuario->apellidos = $request['apellido'];
        $usuario->cedula = $request['cedula'];
        $usuario->contrasena = md5($request['contrasena']);
        $usuario->casa = $request['casa'];
        $usuario->telefono = $request['telefono'];

        $usuario->save();
        
    }

    public function crearAdministrador(Request $request){
        $usuario = new Administrador;

        $usuario->nombre = $request['nombre'];
        $usuario->apellidos = $request['apellido'];
        $usuario->cedula = $request['cedula'];
        $usuario->contrasena = md5($request['contrasena']);

        $usuario->save();
        
    }

    public function borrarResidente(Request $request){
        $usuario = Residente::where('cedula',$request['cedula']);
        $usuario->delete();
    }

    public function borrarAdministrador(Request $request){
        $usuario = Administrador::where('cedula',$request['cedula']);
        $usuario->delete();
    }

    public function borrarCelador(Request $request){
        $usuario = Celador::where('cedula',$request['cedula']);
        $usuario->delete();
    }

}
