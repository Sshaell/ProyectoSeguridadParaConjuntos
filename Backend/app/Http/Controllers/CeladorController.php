<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class CeladorController extends Controller
{
    

    public function login(Request $request){
        $usuario = Residente::where('cedula',$request['cedulaUsuarioIniciarSesion'])->where('contrasena',md5($request['contrasenaUsuarioIniciarSesion']))->first()->get();

        return response()->json($usuario[0]->id);
    }
}
