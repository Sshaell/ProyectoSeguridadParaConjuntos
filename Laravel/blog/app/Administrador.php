<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Administrador extends Model
{
    protected $table ='administradores';
    protected $primaryKey = "ID_Admin";
    public $timestamps = false;
    public $incrementing = false;

    protected $fillable = [

        'ID_Admin',
        'Nombre',
        'Apellido'
    ];

    protected $guarded = [


    ];
}
