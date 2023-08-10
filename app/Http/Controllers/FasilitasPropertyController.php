<?php

namespace App\Http\Controllers;

use App\Models\FasilitasProperty;
use App\Http\Requests\StoreFasilitasPropertyRequest;
use App\Http\Requests\UpdateFasilitasPropertyRequest;

class FasilitasPropertyController extends Controller
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
    public function store(StoreFasilitasPropertyRequest $request)
    {
        //
        $fasilitasProperty = FasilitasProperty::create($request->validated()) ? redirect()->back()->with('message', 'Fasilitas Property Berhasil Ditambahkan !') : redirect()->back()->with('error', 'Fasilitas Property Gagal Ditambahkan !');
    }

    /**
     * Display the specified resource.
     */
    public function show(FasilitasProperty $fasilitasProperty)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(FasilitasProperty $fasilitasProperty)
    {

    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateFasilitasPropertyRequest $request, $id)
    {
        //
        $fasilitasProperty = FasilitasProperty::findOrFail($id);
        $fasilitasProperty->update($request->validated()) ? redirect()->back()->with('message', 'Fasilitas Property Berhasil Diubah !') : redirect()->back()->with('error', 'Fasilitas Property Gagal Diubah !');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        //
        $fasilitasProperty = FasilitasProperty::findOrFail($id);
        $fasilitasProperty->delete() ? back()->with('message', 'Fasilitas Property Berhasil Dihapus !') : back()->with('error', 'Fasilitas Property Gagal Dihapus !');
    }
}
