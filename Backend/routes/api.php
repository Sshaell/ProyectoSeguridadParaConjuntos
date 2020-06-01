<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});


Route::group(['middleware' => ['cors']], function () {
    //Rutas a las que se permitirá acceso
    Route::post('registro', 'ResidenteController@registro');
    Route::post('login_residente', 'ResidenteController@login');
    Route::post('login_admin', 'AdministradorController@login');


    //Admin
    Route::post('crear_celador','AdministradorController@crearCelacho');
    Route::post('crear_residente','AdministradorController@crearResidente');
    Route::post('crear_administrador','AdministradorController@crearAdministrador');
    Route::post('borrar_administrador','AdministradorController@borrarAdministrador');
    Route::post('actualizar_administrador','AdministradorController@actualizarAdministrador');
    Route::post('borrar_residente','AdministradorController@borrarResidente');
    Route::post('actualizar_residente','AdministradorController@actualizarResidente');
    Route::post('borrar_celador','AdministradorController@borarCelador');
    Route::post('actualizar_celador','AdministradorController@actalizarCelador');

    //celador
    Route::post('login_celador','CeladorController@login');
    
});

