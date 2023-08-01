<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateCategoryPostRequest extends FormRequest
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
            'name' => 'required|string|max:255|unique:category_posts,name',
            'slug' => 'required|'
        ];

    }

    public function messages(){
        return [
            'name.required' => 'Kolom nama tidak boleh kosong',
            'name.string' => 'Kolom nama harus berupa string',
            'name.max' => 'Kolom nama tidak boleh lebih dari 255 karakter',
            'name.unique' => 'Nama sudah ada',
            'slug.required' => 'Kolom slug tidak boleh kosong'
        ];
    }
}
