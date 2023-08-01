<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StorePostRequest extends FormRequest
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
            'title' => 'required|max:255|unique:posts,title',
            'slug' => 'required|max:255|unique:posts,slug',
            'category_post_id' => 'required|exists:category_posts,id',
            'body' => 'required',
            'image' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ];
    }

    public function messages(){
        return [
            'title.required' => 'Judul harus diisi.',
            'title.max' => 'Judul tidak boleh lebih dari 255 karakter.',
            'title.unique' => 'Judul sudah ada.',
            'slug.required' => 'Slug harus diisi.',
            'slug.max' => 'Slug tidak boleh lebih dari 255 karakter.',
            'slug.unique' => 'Slug sudah ada.',
            'category_post_id.required' => 'Kategori Post harus diisi.',
            'category_post_id.exists' => 'Kategori Post tidak valid.',
            'body.required' => 'Isi Post harus diisi.',
            'image.required' => 'Gambar harus diisi.',
            'image.image' => 'Gambar harus berupa file gambar.',
            'imsge.mimes' => 'Gambar harus berupa file gambar dengan format jpeg, png, jpg, gif, svg.',
            'image.max' => 'Gambar tidak boleh lebih dari 2 MB.',
        ];
    }
}
