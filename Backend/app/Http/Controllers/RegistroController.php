<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Registro;

class RegistroController extends Controller
{
    public function registro(Request $request){
        $usuario = new Registro;

        $usuario->tipo = $request['entrada'];
        $usuario->residente_id = $request['id_usuario'];
        $usuario->save();
        return response()->json($usuario);
    }

    public function buscarRegistro(Request $request){
        $usuario = Registro::all();
        return response() ->json($usuario);
    }
}
