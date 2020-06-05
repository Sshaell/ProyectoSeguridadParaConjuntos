<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Administrador extends Model
{
    protected $fillable = [
        'nombre',
        'apellido',
        'cedula',
        'contrasena'
    ];
}
