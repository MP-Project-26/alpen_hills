<?php

namespace App\Http\Controllers;

use App\Http\Resources\GalleriesCollection;
use App\Models\Gallery;
use App\Models\Post;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Http\Resources\PostsCollection;

class HomeController extends Controller
{
    public function index()
    {
        $galleryQuery = Gallery::with(['categoryGallery', 'tipeProperty']);
        $dataGalery = new GalleriesCollection($galleryQuery->get());

        $postQuery = Post::with(['categoryPost', 'userPost', 'comments'])->latest();
        $dataBlog = new PostsCollection($postQuery->get());

        return Inertia::render('Home', [
            'title' => 'Home',
            'dataGalery' => $dataGalery,
            'dataBlog' => $dataBlog,
        ]);
    }
}
