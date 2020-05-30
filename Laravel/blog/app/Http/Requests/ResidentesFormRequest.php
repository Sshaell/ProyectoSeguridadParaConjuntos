<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ResidentesFormRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
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
            'casa' => 'required|max:4',
            'Telefono' => 'required|max:10'
        ];
    }
}
