<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class registros extends Model
{
    protected $table = 'registros';
    protected $primaryKey = 'ID';
    public $incrementing = false;

    public $timestamps =false ;

    protected $fillable =[
        'Nombre',
        'Apellido',
        'Accion',
        'Fecha'
    ];

    protected $guarded =[


    ];
}
