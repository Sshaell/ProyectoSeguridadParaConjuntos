<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Residente;

class ResidenteController extends Controller
{
    public function registro(Request $request){
        $usuario = new Residente;

        $usuario->nombre = $request['nombreUsuario'];
        $usuario->apellidos = $request['apellidoUsuario'];
        $usuario->cedula = $request['cedulaUsuario'];
        $usuario->casa = $request['casaUsuario'];
        $usuario->telefono = $request['telefonoUsuario'];
        $usuario->contrasena = md5($request['contrasenaUsuario']);

        $usuario->save();

        return response()->json($usuario);
    }

    public function login(Request $request){
        $usuario = Residente::where('cedula',$request['cedulaUsuarioIniciarSesion'])->where('contrasena',md5($request['contrasenaUsuarioIniciarSesion']))->first()->get();

        return response()->json($usuario[0]->id);
    }

    public function consultarUsuarioId(Request $request){
        $usuario = Residente::find($request['id']);
        return $usuario;
    }
}
