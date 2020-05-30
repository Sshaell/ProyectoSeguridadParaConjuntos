<?php

namespace App\Http\Controllers;

use Illuminate\Http\Requests;
use blog\app\residente;
use Illuminate\Support\Facades\Redirect;
use blog\http\requests\ResidentesFormRequest;
use DB;
class ResidentesController extends Controller
{
    public function __construct()
    {

    }

    public function index(Request $request){
        if($request){
            $query=trim($request->get('searchText'));
            $residentes =DB::table('residentes')->where('nombre',LIKE,'%'.$query.'%')
            ->orderBy('ID_Admin','desc')
            ->paginate(10);
            return view('informacion.residentes.index',["residentes"=>$residentes,"SearchText => $query"]);
        }   
    }

    public function create(){
        return view("informacion.residentes")
    }
    public function store (ResidentesFormRequest $request){
        $Residente=new Residente;
        $Residente->ID_Admin=$request->get('ID');
        $Residente->Nombre=$request->get('Nombre');
        $Residente->Apellido=$request->get('Apellido');      
        $Residente->save();
        return Redirect::to('informacion/residentes') ; 
    }

    public function show($id){
        return view("informacion.residentes.show",["Residente"=>Residente::findOrFail($id)]);
    }

    public function edit($id){
        return view("informacion.residentes.edit",["Residente"=>Residente::findOrFail($id)]);

    }

    public function update(ResidentesFormRequest $request,$id){
        $residente=Residente::findOrFail($id);
        $residente->nombre=$request->get('nombre');
        $residente->apellido=$request->get('apellido');
        $residente->casa=$request->get('casa');
        $residente->telefono=$request->get('telefono');                
        return Redirect::to('informacion/residentes');
    }

    public function destroy($id){
        $residente=Residente::findOrFail($id);
        $residente-> casa ='0';
        $residente->update();
        return Redirect::to('informacion/residentes');

    }
    
}
