<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class residente extends Model
{
    protected $table='residentes';
    protected $primaryKey = "ID";
    public $incrementing = false;

    public $timestamps =false;

    protected $fillable =[
        'Nombre',
        'Apellido',
        'Casa',
        'Telefono'
    ];

    protected $guarded =[


    ];
}
