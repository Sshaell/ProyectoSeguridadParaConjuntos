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
    Route::post('crear_celacho', 'AdministradorController@crearCelacho');

});

