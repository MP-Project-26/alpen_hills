<?php

namespace App\Http\Controllers;

use App\Models\CategoryGallery;
use Illuminate\Http\Request;

class CategoryGalleryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate(
            [
                'name' => 'required|string|max:255|unique:category_galleries,name',
                'slug' => 'required|string|max:255|unique:category_galleries,slug',
            ],
            [
                'name.required' => 'Nama kategori wajib diisi',
                'name.string' => 'Nama kategori harus berupa string',
                'name.max' => 'Nama kategori maksimal 255 karakter',
                'name.unique' => 'Nama kategori sudah ada',
                'slug.required' => 'Slug wajib diisi',
                'slug.string' => 'Slug harus berupa string',
                'slug.max' => 'Slug maksimal 255 karakter',
                'slug.unique' => 'Slug sudah ada',
            ]
        );

        if (CategoryGallery::create($request->all())) {
            return redirect()->back()->with('message', 'Berhasil menambahkan Category');
        } else {
            return redirect()->back()->with('error', 'Gagal menambahkan Category');
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(CategoryGallery $categoryGallery)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(CategoryGallery $categoryGallery)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $slug)
    {
        //validation request
        $request->validate(
            [
                'name' => 'required|string|max:255|unique:category_galleries,name,',
            ],
            [
                'name.required' => 'Nama kategori wajib diisi',
                'name.string' => 'Nama kategori harus berupa string',
                'name.max' => 'Nama kategori maksimal 255 karakter',
                'name.unique' => 'Nama kategori sudah ada',
            ]
        );

        $category = CategoryGallery::where('slug', $slug)->first();
        $category->name = $request->name;
        $category->slug = $request->slug;
        if ($category->save()) {
            return redirect()->back()->with('message', 'Berhasil mengubah Category');
        } else {
            return redirect()->back()->with('error', 'Gagal mengubah Category');
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($slug)
    {
        //
        $category = CategoryGallery::where('slug', $slug)->first();
        $category->delete() ? back()->with('message', 'Category Berhasil Dihapus.') : back()->with('error', 'Category Gagal Dihapus.');
    }
}
