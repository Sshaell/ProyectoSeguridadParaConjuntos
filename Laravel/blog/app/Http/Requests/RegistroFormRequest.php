<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class RegistroFormRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return false;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'ID'=> 'required|max:10',
            'nombre'=> 'required|max:30',
            'Apellido'=> 'required|max:30',
            'Accion' => 'required|max:7',
            'Fecha' => 'required
        ];
    }
}
