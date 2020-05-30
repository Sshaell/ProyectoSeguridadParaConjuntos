<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Celador extends Model
{
    protected $table = 'celadores';
    protected $primaryKey = 'ID';
    public $incrementing = false;

    public $timestamps =false ;

    protected $fillable =[
        'Nombre',
        'Apellido',
        'Turno'
    ];

    protected $guarded =[


    ];


}
