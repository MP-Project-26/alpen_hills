<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateGalleryRequest extends FormRequest
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
            'name' => 'required|max:255|unique:galleries,name',
            'slug' => 'required|max:255|',
            'category_gallery_id' => 'required|exists:category_galleries,id',
            'tipe_property_id' => 'required|exists:tipe_properties,id',
        ];
    }

    public function messages(): array
    {
        return [
            'name.required' => 'Nama Gallery harus diisi.',
            'name.max' => 'Nama Gallery tidak boleh lebih dari 255 karakter.',
            'name.unique' => 'Nama Gallery sudah ada.',
            'slug.required' => 'Slug harus diisi.',
            'slug.max' => 'Slug tidak boleh lebih dari 255 karakter.',
            
            'category_gallery_id.required' => 'Kategori Gallery harus diisi.',
            'category_gallery_id.exists' => 'Kategori Gallery tidak valid.',
            'tipe_property_id.required' => 'Tipe Property harus diisi.',
            'tipe_property_id.exists' => 'Tipe Property tidak valid.',
        ];
    }


}
