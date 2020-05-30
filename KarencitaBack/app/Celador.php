<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Celador extends Model
{
    protected $fillable = [
        'nombre',
        'apellidos',
        'cedula',
        'contrasena',
        'turno'
    ];
}
