<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Administrador extends Model
{
    protected $fillable = [
        'nombre',
        'apellidos',
        'cedula',
        'contrasena'
    ];
}
