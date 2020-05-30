<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Contrasena extends Model
{
    protected $table = 'contraseñas';
    protected $primaryKey = 'ID';
    public $incrementing = false;

    public $timestamps =false ;

    protected $fillable =[
        'Contraseña'
    ];

    protected $guarded =[

    ];
}
