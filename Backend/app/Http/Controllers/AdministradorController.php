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
        return response()->json($usuario);
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
        return response()->json($usuario);
        
    }

    public function crearAdministrador(Request $request){
        $usuario = new Administrador;

        $usuario->nombre = $request['nombre'];
        $usuario->apellido = $request['apellido'];
        $usuario->cedula = $request['cedula'];
        $usuario->contrasena = md5($request['contrasena']);

        $usuario->save();
        return response()->json($usuario);
        
    }

    public function borrarResidente(Request $request){
        $usuario = Residente::where('cedula',$request['cedula'])->first();
        $usuario->delete();
    }

    public function borrarAdministrador(Request $request){
        $usuario = Administrador::where('cedula',$request['cedula'])->first();
        $usuario->delete();
    }

    public function borrarCelador(Request $request){
        $usuario = Celador::where('cedula',$request['cedula'])->first();
        $usuario->delete();
    }

    public function actualizarResidente(Request $request){
       $usuario = Residente::where('cedula',$request['cedula'])->first();
       $usuario->update(['nombre' => $request->input('nombre'),
                         'apellidos' => $request->input('apellido'),
                         'cedula' => $request->input('cedula'),
                         'telefono' => $request->input('telefono'),
                         'casa' => $request->input('casa')
                         ]);
    }

    public function actualizarCelador(Request $request){
        $usuario = Celador::where('cedula',$request['cedula'])->first();
        $usuario->update(['nombre' => $request->input('nombre'),
                          'apellidos' => $request->input('apellido'),
                          'cedula' => $request->input('cedula'),
                          'turno' => $request->input('telefono')
                          ]);
     }
     public function actualizarAdministrador(Request $request){
        $usuario = Administrador::where('cedula',$request['cedula'])->first();
        $usuario->update(['nombre' => $request->input('nombre'),
                          'apellidos' => $request->input('apellido'),
                          'cedula' => $request->input('cedula')
                          ]);
     }

}
