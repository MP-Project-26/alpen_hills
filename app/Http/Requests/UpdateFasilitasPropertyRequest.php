<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateFasilitasPropertyRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            'icon' => 'required',
            'attribute' => 'required',
            'value' => 'required',
        ];
    }

    public function messages(){
        return [
            'icon.required' => 'Icon Harus Diisi !',
            'attribute.required' => 'Attribute Harus Diisi !',
            'value.required' => 'Value Harus Diisi !',
        ];
    }
}
