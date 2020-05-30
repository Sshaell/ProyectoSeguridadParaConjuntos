<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use blog\app\Celador
use Illuminate\Support\Facades\Redirect;
use blog\http\requests\CeladorFormRequest;
use DB;
class CeladorController extends Controller
{
    public function __construct()
    {

    }

    public function index(Request $request){
        if($request){
            $query=trim($request->get('searchText'));
            $celadores =DB::table('celadores')->where('nombre','LIKE','%'.$query.'%')
            ->orderBy('ID_Admin','desc')
            ->paginate(10);
            return view('informacion.celadores.index',["celadores"=>$celadores,"SearchText => $query"]);
        }   
    }

    public function create(){
        return view("informacion.celadores")
    }
    public function store (celadoresFormRequest $request){
        $Celador=new Celador;
        $Celador->ID_Admin=$request->get('ID');
        $Celador->Nombre=$request->get('Nombre');
        $Celador->Apellido=$request->get('Apellido');   
        $Celador->Turno=$request->get('Turno');                 
        $Celador->save();
        return Redirect::to('informacion/celadores') ; 
    }

    public function show($id){
        return view("informacion.celadores.show",["Celador"=>Celador::findOrFail($id)]);
    }

    public function edit($id){
        return view("informacion.celadores.edit",["Celador"=>Celador::findOrFail($id)]);

    }

    public function update(celadoresFormRequest $request,$id){
        $Celador=Celador::findOrFail($id);
        $Celador->nombre=$request->get('nombre');
        $Celador->apellido=$request->get('apellido');
        $Celador->turno=$request->get('turno');              
        return Redirect::to('informacion/celadores');
    }

    public function destroy($id){
        $Celador=Celador::findOrFail($id);
        $Celador-> ID ='0';
        $Celador->update();
        return Redirect::to('informacion/celadores');

    }
    
}
