<?php

use App\Http\Controllers\AdminUserController;
use App\Http\Controllers\AuthAdmin\AuthController;
use App\Http\Controllers\CategoryGalleryController;
use App\Http\Controllers\CategoryPostController;
use App\Http\Controllers\CommentController;
use App\Http\Controllers\GalleryController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\TipePropertyController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::middleware('guest')->prefix('admin')->group(function () {
    Route::get('/login', [AuthController::class, 'index'])->name('login');
    Route::post('/login', [AuthController::class, 'store'])->name('login.store');
});

Route::get('/', [HomeController::class, 'index'])->name('home');
Route::get('/blog',  function () {
    return Inertia::render('Blog');
})->name('blog');
Route::get('/blog/spesifik/{id}',  function () {
    return Inertia::render('blog/[...id]');
})->name('blog');

Route::get('/about', function () {
    return Inertia::render('About');
})->name('about');

Route::middleware('auth')->group(function () {
    Route::get('/admin/profile/{user}', [AuthController::class, 'show'])->name('profile.show');
    Route::post('/admin/profile/update/{user}', [AuthController::class, 'update'])->name('profile.update');
    Route::delete('/admin/profile/{user}', [AuthController::class, 'deleteAcount'])->name('profile.deleteAcount');
    Route::post('/admin/logout', [AuthController::class, 'destroy'])->name('logout');
    Route::get('/admin/dashboard', function () {
        return Inertia::render('Admin/Dashboard');
    })->name('dashboard');

    // Gallery Management
    Route::get('/admin/gallery', [GalleryController::class, 'indexAdmin'])->name('galleryAdmin.index');
    Route::post('/admin/gallery/add', [GalleryController::class, 'store'])->name('galleryAdmin.store');
    Route::delete('/admin/gallery/delete/{slug}', [GalleryController::class, 'destroy'])->name('galleryAdmin.destroy');
    Route::post('/admin/gallery/update/{slug}', [GalleryController::class, 'update'])->name('galleryAdmin.update');

    // Gallery Category Management
    Route::post('/admin/category/add', [CategoryGalleryController::class, 'store'])->name('galleryCategoryAdmin.store');
    Route::delete('/admin/category/delete/{slug}', [CategoryGalleryController::class, 'destroy'])->name('galleryCategoryAdmin.destroy');
    Route::post('/admin/category/update/{slug}', [CategoryGalleryController::class, 'update'])->name('galleryCategoryAdmin.update');

    //Type Property Management
    Route::post('/admin/typeProperty/add', [TipePropertyController::class, 'store'])->name('typePropertyAdmin.store');
    Route::delete('/admin/typeProperty/delete/{slug}', [TipePropertyController::class, 'destroy'])->name('typePropertyAdmin.destroy');
    Route::post('/admin/typeProperty/update/{slug}', [TipePropertyController::class, 'update'])->name('typePropertyAdmin.update');
    Route::get('/admin/typeProperty/{tipeProperty}', [TipePropertyController::class, 'show'])->name('typePropertyAdmin.show');

    //Posts Management
    Route::get('/admin/post', [PostController::class, 'indexByAdmin'])->name('postsAdmin');
    Route::get('/admin/post/create', [PostController::class, 'create'])->name('postsAdmin.create');
    Route::get('/admin/post/category/{slug}', [PostController::class, 'indexByAdmin'])->name('postsAdmin.indexByAdmin');
    Route::post('/admin/post/add', [PostController::class, 'store'])->name('postsAdmin.store');
    Route::delete('/admin/post/delete/{post}', [PostController::class, 'destroy'])->name('postsAdmin.destroy');
    Route::get('/admin/post/edit/{slug}', [PostController::class, 'edit'])->name('postsAdmin.edit');
    Route::post('/admin/post/update/{slug}', [PostController::class, 'update'])->name('postsAdmin.update');
    Route::delete('/admin/categoryPost/delete/{categoryPost}', [CategoryPostController::class, 'destroy'])->name('postsAdmin.destroyCategory');
    Route::post('/admin/categoryPost/add', [CategoryPostController::class, 'store'])->name('postsAdmin.storeCategory');
    Route::post('/admin/categoryPost/update/{categoryPost}', [CategoryPostController::class, 'update'])->name('postsAdmin.updateCategory');

    //Comments Management
    Route::delete('/admin/comment/delete/{comment}', [CommentController::class, 'destroy'])->name('commentsAdmin.destroy');
});

Route::get('/admin/user', [AdminUserController::class, 'index'])->name('userAdmin.index')->middleware('super_admin');
Route::post('/admin/user/add', [AdminUserController::class, 'store'])->name('userAdmin.store')->middleware('super_admin');
Route::get('admin/user/role/{id}', [AdminUserController::class, 'role'])->name('userAdmin.role')->middleware('super_admin');
Route::delete('/admin/user/delete/{user}', [AdminUserController::class, 'destroy'])->name('userAdmin.destroy')->middleware('super_admin');
Route::post('/admin/user/update/{id}', [AdminUserController::class, 'update'])->name('userAdmin.update')->middleware('super_admin');
