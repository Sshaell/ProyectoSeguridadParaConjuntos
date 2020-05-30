<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use blog\app\registros;
use Illuminate\Support\Facades\Redirect;
use blog\http\requests\RegistroFormRequest;
use DB;
class RegistroController extends Controller
{
    public function __construct()
    {

    }

    public function index(Request $request){
        if($request){
            $query=trim($request->get('searchText'));
            $registros =DB::table('registros')->where('nombre','LIKE','%'.$query.'%')
            ->orderBy('ID_Admin','desc')
            ->paginate(10);
            return view('informacion.registros.index',["registros"=>$registros,"SearchText => $query"]);
        }   
    }

    public function create(){
        return view("informacion.registros")
    }
    public function store (registrosFormRequest $request){
        $registro=new registro;
        $registro->ID_Admin=$request->get('ID');
        $registro->Nombre=$request->get('Nombre');
        $registro->Apellido=$request->get('Apellido');   
        $registro->Accion=$request->get('Accion');
        $fecha->Fecha=$request->get('Fecha');                      
        $registro->save();
        return Redirect::to('informacion/registros') ; 
    }

    public function show($id){
        return view("informacion.registros.show",["registro"=>registro::findOrFail($id)]);
    }

    public function edit($id){
        return view("informacion.registros.edit",["registro"=>registro::findOrFail($id)]);

    }

    public function update(registrosFormRequest $request,$id){
        $registro=registro::findOrFail($id);
        $registro->nombre=$request->get('nombre');
        $registro->apellido=$request->get('apellido');
        $registro->accion=$request->get('accion');
        $registro->fecha=$request->get('fecha');                          
        return Redirect::to('informacion/registros');
    }

    public function destroy($id){
        $registro=registro::findOrFail($id);
        $registro-> ID ='0';
        $registro->update();
        return Redirect::to('informacion/registros');

    }

}
