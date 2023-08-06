<?php

namespace App\Http\Controllers;

use App\Models\SpefisikasiProperty;
use App\Models\TipeProperty;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TipePropertyController extends Controller
{
    public function store(Request $request)
    {
        
        $request->validate(
            [
                [
                    'name' => 'required|max:255',
                    'slug' => 'required|unique:tipe_properties|max:255',
                    'price'=>'required|'
                ],
                [
                    'name.required' => 'Nama Tipe Property tidak boleh kosong',
                    'name.max' => 'Nama Tipe Property tidak boleh lebih dari 255 karakter',
                    'slug.required' => 'Slug Tipe Property tidak boleh kosong',
                    'slug.max' => 'Slug Tipe Property tidak boleh lebih dari 255 karakter',
                    'slug.unique' => 'Slug Tipe Property sudah ada',
                    'price.required'=>'Harga Tipe Property tidak boleh kosong'
                ]


            ]

        );

        $tipeProperty = new TipeProperty();
        $tipeProperty->name = $request->name;
        $tipeProperty->slug = $request->slug;
        $tipeProperty->price = $request->price;
        $tipeProperty->save() ? back()->with('message', 'Tipe Property Berhasil ditambah.') : back()->with('error', 'Data Gagal ditambah.');
    }


    public function show(TipeProperty $tipeProperty)
    {
        //relasi to spesifikasiProperty
        $tipeProperty->load(['spefisikasiProperty', 'fasilitasProperty']);

        return Inertia::render('Admin/Gallery/SpesifikasiProperty', [
            'title' => 'Detail Tipe Property',
            'tipeProperty' => $tipeProperty,
        ]);
    }


    public function update(Request $request, $slug)
    {
        $request->validate(
            [
                [
                    'name' => 'required|max:255|unique:tipe_properties,name,' . $slug . ',slug',
                    'slug' => 'required|max:255',
                    'price'=>'required|'
                ],
                [
                    'name.required' => 'Nama Tipe Property tidak boleh kosong',
                    'name.max' => 'Nama Tipe Property tidak boleh lebih dari 255 karakter',
                    'name.unique' => 'Nama Tipe Property sudah ada',
                    'slug.required' => 'Slug Tipe Property tidak boleh kosong',
                    'slug.max' => 'Slug Tipe Property tidak boleh lebih dari 255 karakter',
                    'price.required'=>'Harga Tipe Property tidak boleh kosong'
                ]
            ]
        );

        $tipeProperty = TipeProperty::where('slug', $slug)->first();
        $tipeProperty->name = $request->name;
        $tipeProperty->slug = $request->slug;
        $tipeProperty->price = $request->price;
        $tipeProperty->save() ? back()->with('message', 'Tipe Property Berhasil diupdate.') : back()->with('error', 'Data Gagal diupdate.');
    }

    public function destroy($id)
    {
        //delete on table tipe_property and spesifikasi_property and fasilitas_property
        $tipeProperty = TipeProperty::findOrFail($id);
        $tipeProperty->spefisikasiProperty()->delete();
        $tipeProperty->fasilitasProperty()->delete();
        $tipeProperty->delete() ? back()->with('message', 'Tipe Property Berhasil dihapus.') : back()->with('error', 'Data Gagal dihapus.');
    }

}
