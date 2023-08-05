<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreFasilitasPropertyRequest extends FormRequest
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
            'tipe_property_id' => 'required|exists:tipe_properties,id',
            'icon' => 'required',
            'attribute' => 'required',
            'value' => 'required',
        ];
    }

    public function messages(){
        return [
            'tipe_property_id.required' => 'Tipe Property Harus Diisi !',
            'tipe_property_id.exists' => 'Tipe Property Tidak Ditemukan !',
            'icon.required' => 'Icon Harus Diisi !',
            'attribute.required' => 'Attribute Harus Diisi !',
            'value.required' => 'Value Harus Diisi !',
        ];
    }
}
