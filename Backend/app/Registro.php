<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Registro extends Model
{
    protected $fillable = [
        'tipo',
        'residente_id'
    ];

    public function residente() {
        return $this->belongsTo(Residente::class);
    }
}
