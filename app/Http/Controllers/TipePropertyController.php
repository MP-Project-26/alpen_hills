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
                ],
                [
                    'name.required' => 'Nama Tipe Property tidak boleh kosong',
                    'name.max' => 'Nama Tipe Property tidak boleh lebih dari 255 karakter',
                    'slug.required' => 'Slug Tipe Property tidak boleh kosong',
                    'slug.max' => 'Slug Tipe Property tidak boleh lebih dari 255 karakter',
                    'slug.unique' => 'Slug Tipe Property sudah ada',
                ]


            ]

        );

        $tipeProperty = new TipeProperty();
        $tipeProperty->name = $request->name;
        $tipeProperty->slug = $request->slug;
        $tipeProperty->save() ? back()->with('message', 'Tipe Property Berhasil ditambah.') : back()->with('error', 'Data Gagal ditambah.');
    }


    public function show(TipeProperty $tipeProperty)
    {
        //relasi to spesifikasiProperty
        $tipeProperty->load('spefisikasiProperty');
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
                ],
                [
                    'name.required' => 'Nama Tipe Property tidak boleh kosong',
                    'name.max' => 'Nama Tipe Property tidak boleh lebih dari 255 karakter',
                    'name.unique' => 'Nama Tipe Property sudah ada',
                    'slug.required' => 'Slug Tipe Property tidak boleh kosong',
                    'slug.max' => 'Slug Tipe Property tidak boleh lebih dari 255 karakter',
                ]
            ]
        );

        $tipeProperty = TipeProperty::where('slug', $slug)->first();
        $tipeProperty->name = $request->name;
        $tipeProperty->slug = $request->slug;
        $tipeProperty->save() ? back()->with('message', 'Tipe Property Berhasil diupdate.') : back()->with('error', 'Data Gagal diupdate.');
    }

    public function destroy($slug)
    {
        $tipeProperty = TipeProperty::where('slug', $slug)->first();
        $tipeProperty->delete() ? back()->with('message', 'Tipe Property Berhasil dihapus.') : back()->with('error', 'Data Gagal dihapus.');
    }

}
