<?php

namespace App\Http\Controllers;

use App\Models\TipeProperty;
use Illuminate\Http\Request;

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

}
