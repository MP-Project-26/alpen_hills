<?php

namespace App\Http\Controllers;

use App\Http\Requests\GalleryRequest;
use App\Http\Requests\UpdateGalleryRequest;
use App\Http\Resources\GalleriesCollection;
use App\Models\CategoryGallery;
use App\Models\Gallery;
use App\Models\TipeProperty;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class GalleryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    public function indexAdmin(Request $request)
    {
        $search = $request->query('search');

        // Query untuk mengambil data galleries yang berlasi dengan categoryGallery dan tipeProperty
        $galleryQuery = Gallery::with(['categoryGallery', 'tipeProperty']);

        // Jika ada parameter pencarian, tambahkan kondisi pencarian ke query
        if ($search) {
            $galleryQuery->where(function ($q) use ($search) {
                $q->where('name', 'LIKE', '%' . $search . '%')
                    ->orWhereHas(
                        'categoryGallery',
                        function ($q) use ($search) {
                            $q->where('name', 'LIKE', '%' . $search . '%');
                        }
                    );

                $q->orWhereHas('tipeProperty', function ($q) use ($search) {
                    $q->where('name', 'LIKE', '%' . $search . '%');
                });



            });
        }

        $gallery = new GalleriesCollection($galleryQuery->paginate(5));
        $categoryGallery = CategoryGallery::all();
        $propertyType = TipeProperty::all();


        return Inertia::render('Admin/Gallery/index', [
            'title' => 'Gallery Management',
            'gallery' => $gallery,
            'categoryGallery' => $categoryGallery,
            'propertyType' => $propertyType,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(GalleryRequest $request)
    {
        $imageName = $request->image->getClientOriginalName();
        $imagePath = $request->file('image')->storeAs('public/images/gallery', $imageName);
        $gallery = new Gallery();
        $gallery->name = $request->name;
        $gallery->slug = $request->slug;
        $gallery->category_gallery_id = $request->category_gallery_id;
        $gallery->tipe_property_id = $request->tipe_property_id;
        $gallery->image = $imageName;
        $gallery->save() ? back()->with('message', 'Gallery Berhasil Ditambahkan.') : back()->with('error', 'Gallery Gagal Ditambahkan.');
    }

    /**
     * Display the specified resource.
     */
    public function show(Gallery $gallery)
    {
        //
    }

    public function update(Request $request, $slug)
    {

            $request->validate([
                'name' => 'required',
                'category_gallery_id' => 'required',
                'tipe_property_id' => 'required',
            ], [
                'name.required' => 'Nama Gallery tidak boleh kosong.',
                'category_gallery_id.required' => 'Kategori Gallery tidak boleh kosong.',
                'tipe_property_id.required' => 'Tipe Property tidak boleh kosong.',
            ]);

            $gallery = Gallery::where('slug', $slug)->firstOrFail();

            if ($request->hasFile('image')) {
                $request->validate([
                    'image' => [
                        'max:2048',
                        'image',
                        'mimes:jpeg,png,jpg,gif,svg',
                    ],
                ], [
                    'image.max' => 'Gambar tidak boleh lebih dari 2 MB.',
                    'image.image' => 'Gambar harus berupa file gambar dengan format jpeg, png, jpg, gif, svg.',
                    'image.mimes' => 'Gambar harus berupa file gambar.',
                ]);

                Storage::delete('public/images/gallery/' . $gallery->image);
                $imageName = $request->image->getClientOriginalName();
                $imagePath = $request->file('image')->storeAs('public/images/gallery', $imageName);
                $gallery->name = $request->name;
                $gallery->category_gallery_id = $request->category_gallery_id;
                $gallery->tipe_property_id = $request->tipe_property_id;
                $gallery->image = $imageName;
                $gallery->save() ? back()->with('message', 'Gallery Berhasil Diupdate.') : back()->with('error', 'Gallery Gagal Diupdate.');
            }else{
                $gallery->name = $request->name;
                $gallery->category_gallery_id = $request->category_gallery_id;
                $gallery->tipe_property_id = $request->tipe_property_id;
                $gallery->save() ? back()->with('message', 'Gallery Berhasil Diupdate.') : back()->with('error', 'Gallery Gagal Diupdate.');
            }

    }


    /**
     * Remove the specified resource from storage.
     */
    public function destroy($slug)
    {
        $gallery = Gallery::where('slug', $slug)->firstOrFail();
        $image_path = storage_path('app/public/images/gallery/' . $gallery->image);
        if (file_exists($image_path)) {
            @unlink($image_path);
        }
        $gallery->delete() ? back()->with('message', 'Gallery Berhasil Dihapus.') : back()->with('error', 'Gallery Gagal Dihapus.');

    }
}
