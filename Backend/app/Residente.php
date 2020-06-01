<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Residente extends Model
{
    protected $fillable = [
        'nombre',
        'apellidos',
        'cedula',
        'contrasena',
        'telefono',
        'casa'
    ];

    protected $hidden = [
        'contrasena'
    ];
}
