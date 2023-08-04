<?php

namespace App\Http\Controllers;

use App\Http\Resources\PostsCollection;
use App\Models\CategoryPost;
use App\Models\Post;
use App\Http\Requests\StorePostRequest;
use Inertia\Inertia;
use Illuminate\Support\Str;
use Storage;
use Illuminate\Http\Request;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    public function indexByAdmin($slug = null)
    {
        $search = request()->query('search');
        if ($slug) {
            $postQuery = Post::with(['categoryPost', 'userPost', 'comments'])->whereHas('categoryPost', function ($query) use ($slug) {
                $query->where('slug', $slug);
            })->latest();
        } else {
            $postQuery = Post::with(['categoryPost', 'userPost', 'comments'])->latest();
        }

        if ($search) {
            $postQuery->where(function ($q) use ($search) {
                $q->where('title', 'LIKE', '%' . $search . '%')
                    ->orWhereHas(
                        'categoryPost',
                        function ($q) use ($search) {
                            $q->where('name', 'LIKE', '%' . $search . '%');
                        }
                    );
            });
        }

        $post = new PostsCollection($postQuery->paginate(2));
        $categoryPost = CategoryPost::all();


        return Inertia::render('Admin/Posts/Index', [
            'title' => 'Blog Management',
            'posts' => $post,
            'categoryPost' => $categoryPost,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $categoryPost = CategoryPost::all();
        return Inertia::render('Admin/Posts/TambahPost', [
            'title' => 'Unggah Postingan Baru',
            'categoryPost' => $categoryPost,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StorePostRequest $request)
    {
        $imageName = time() . '-' . $request->image->getClientOriginalName();
        $imagePath = $request->file('image')->storeAs('public/images/blog', $imageName);
        $post = new Post();
        $post->category_post_id = $request->category_post_id;
        $post->user_id = $request->user_id;
        $post->title = $request->title;
        $post->slug = $request->slug;
        $post->image = $imageName;
        $post->body = $request->body;
        $post->excerpt = Str::limit(strip_tags($request->body), 100);

        $post->save() ? back()->with('message', 'Post Berhasil Ditambahkan.') : back()->with('error', 'Post Gagal Ditambahkan.');
    }

    /**
     * Display the specified resource.
     */
    public function show(Post $post)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Post $post, $slug)
    {
        $post = Post::where('slug', $slug)->first();
        $categoryPost = CategoryPost::all();
        return Inertia::render('Admin/Posts/EditPost', [
            'title' => 'Edit Postingan',
            'post' => $post,
            'categoryPost' => $categoryPost,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $slug)
    {

        $post = Post::where('slug', $slug)->firstOrFail();
        $post->category_post_id = $request->category_post_id;
        $post->title = $request->title;
        $post->slug = $request->slug;
        $post->body = $request->body;
        $post->excerpt = Str::limit(strip_tags($request->body), 200);

        if ($request->hasFile('image')) {
            request()->validate([
                [
                    'image' => 'image|mimes:jpeg,png,jpg,gif,svg|max:2048',
                    'image.required' => 'Gambar tidak boleh kosong.',
                    'image.image' => 'Gambar harus berupa file gambar.',
                    'image.mimes' => 'Format file gambar harus jpeg,png,jpg,gif,svg.',
                    'image.max' => 'Gambar tidak boleh lebih dari 2MB.',
                ]
            ]);
            Storage::delete('public/images/blog/' . $post->image);
            $imageName = time() . '-' . $request->image->getClientOriginalName();
            $imagePath = $request->file('image')->storeAs('public/images/blog', $imageName);
            $post->image = $imageName;
        }

        $post->save() ? back()->with('message', 'Post Berhasil Diupdate.') : back()->with('error', 'Post Gagal Diupdate.');


    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Post $post)
    {
        //delete post imgae
        Storage::delete('public/images/blog/' . $post->image);
        $post->delete() ? back()->with('message', 'Post Berhasil Dihapus.') : back()->with('error', 'Post Gagal Dihapus.');

    }
}
