<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreSpefisikasiPropertyRequest extends FormRequest
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
            'attribute' => 'required|string|max:255',
            'value' => 'required|string|max:255',
            'icon' => 'string|max:255',
            'tipe_property_id' => 'required|integer|exists:tipe_properties,id',
        ];
    }

    public function messages() {
        return [
            'attribute.required' => 'Spesifikasi Harus diisi !',
            'attribute.string' => 'Spesifikasi Harus Berupa String !',
            'attribute.max' => 'Spesifikasi Maksimal 255 Karakter !',
            'value.max' => 'Nilai Spesifikasi Maksimal 255 Karakter !',
            'icon.max' => 'Icon Spesifikasi Maksimal 255 Karakter !',
            'icon.string' => 'Icon Spesifikasi Harus Berupa String !',
            'value.string' => 'Nilai Spesifikasi Harus Berupa String !',
            'value.required' => 'Nilai Spesifikasi Harus diisi !',
            'tipe_property_id.required' => 'Tipe Property Harus diisi !',
            'tipe_property_id.exists' => 'Tipe Property Tidak Ditemukan !',
        ];
    }
}
