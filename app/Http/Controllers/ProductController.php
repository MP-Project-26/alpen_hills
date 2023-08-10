<?php

namespace App\Http\Controllers;

use App\Models\CategoryGallery;
use App\Models\TipeProperty;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProductController extends Controller
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
        //
    }

    /**
     * Display the specified resource.
     */
    public function show($slug)
    {
        $product = TipeProperty::where('slug', $slug)->first();
        $product->load(['spefisikasiProperty', 'fasilitasProperty', 'gallery',]);
        //get product with gallery to rellation category gallery
        $product->gallery->load(['categoryGallery']);

        $categoryGallery = CategoryGallery::latest()->get();


        return Inertia::render('Tipe', [
            'title' => 'Tipe '.$product->name,
            'product' => $product,
            'categoryGallery' => $categoryGallery,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(TipeProperty $tipeProperty)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, TipeProperty $tipeProperty)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(TipeProperty $tipeProperty)
    {
        //
    }
}
