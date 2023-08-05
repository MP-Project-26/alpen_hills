<?php

namespace App\Http\Controllers;

use App\Models\SpefisikasiProperty;
use App\Http\Requests\StoreSpefisikasiPropertyRequest;
use App\Http\Requests\UpdateSpefisikasiPropertyRequest;

class SpesifikasiPropertyController extends Controller
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
    public function store(StoreSpefisikasiPropertyRequest $request)
    {
        //
        $spefisikasiProperty = SpefisikasiProperty::create($request->validated()) ? back()->with('message', 'Spesifikasi Property Berhasil Ditambahkan !') : back()->with('error', 'Spesifikasi Property Gagal Ditambahkan !');
    }

    /**
     * Display the specified resource.
     */
    public function show(SpefisikasiProperty $spefisikasiProperty)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(SpefisikasiProperty $spefisikasiProperty)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateSpefisikasiPropertyRequest $request, $id)
    {
        $spefisikasiProperty = SpefisikasiProperty::find($id);
        $spefisikasiProperty->update($request->validated()) ? back()->with('message', 'Spesifikasi Property Berhasil Diubah !') : back()->with('error', 'Spesifikasi Property Gagal Diubah !');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        //
        $spefisikasiProperty = SpefisikasiProperty::find($id);
        $spefisikasiProperty->delete() ? back()->with('message', 'Spesifikasi Property Berhasil Dihapus !') : back()->with('error', 'Spesifikasi Property Gagal Dihapus !');
    }
}
