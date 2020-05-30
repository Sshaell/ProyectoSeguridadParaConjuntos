<?php

namespace App\Http\Controllers;

use App\Administrador as AppAdministrador;
use Illuminate\Http\Requests;
use blog\Administrador;
use Illuminate\Support\Facades\Redirect;
use blog\Http\Request\AdministradorFormRequest;
use DB;

class AdministradorController extends Controller
{
    public function __construct()
    {

    }

    public function index(Request $request)
    {
        if($request){
            $query=trim($request->get('searchText'));
            $administradores=DB::table('administradores')->where('nombre','LIKE','%'.$query.'%')
            ->orderBy('ID_Admin','desc')
            ->paginate(10);
            return view('informacion.administradores.index',["administradores"=>$administradores,"SearchText => $query"]);
        }   
    }

    public function create(){
        return view("informacion.administradores")
    }
    public function store (AdministradorFormRequest $request){
        $administrador=new Administrador;
        $administrador->ID_Admin=$request->get('ID_Admin');
        $administrador->Nombre=$request->get('Nombre');
        $administrador->Apellido=$request->get('Apellido');      
        $administrador->save();
        return Redirect::to('informacion/administradores') ; 
    }

    public function show($id){
        return view("informacion.administradores.show",["administrador"=>Administrador::findOrFail($id)]);
    }

    public function edit($id){
        return view("informacion.administradores.edit",["administrador"=>Administrador::findOrFail($id)]);

    }

    public function update(AdministradorFormRequest $request,$id){
        $administrador=Administrador::findOrFail($id);
        $administrador->nombre=$request->get('nombre');
        $administrador->apellido=$request->get('apellido');
        return Redirect::to('informacion/administradores');
    }

    public function destroy($id){
        $administrador=Administrador::findOrFail($id);
        $administrador-> apellido ='0';
        $administrador->update();
        return Redirect::to('informacion/administradores');

    }
    
}

