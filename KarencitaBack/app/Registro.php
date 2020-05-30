<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Registro extends Model
{
    protected $fillable = [
        'tipo',
        'fecha',
        'residente_id'
    ];
}
