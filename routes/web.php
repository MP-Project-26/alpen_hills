<?php

use App\Http\Controllers\AdminUserController;
use App\Http\Controllers\AuthAdmin\LoginAdmin;
use App\Http\Controllers\CategoryGalleryController;
use App\Http\Controllers\GalleryController;
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

Route::get('/', function () {
    return Inertia::render('Welcome');
});

Route::get('/admin/login', [LoginAdmin::class, 'index'])->name('login')->middleware('guest');
Route::post('/admin/login', [LoginAdmin::class, 'store'])->name('login.store')->middleware('guest');


Route::middleware('auth')->group(function () {
    Route::post('/admin/logout', [LoginAdmin::class, 'destroy'])->name('logout');
    Route::get('/admin/dashboard', function () {
        return Inertia::render('Admin/Dashboard');
    })->name('dashboard');
    // Gallery Management
    Route::get('/admin/gallery', [GalleryController::class, 'indexAdmin'])->name('galleryAdmin.index');
    Route::post('/admin/gallery/add', [GalleryController::class, 'store'])->name('galleryAdmin.store');
    Route::delete('/admin/gallery/delete/{slug}', [GalleryController::class, 'destroy'])->name('galleryAdmin.destroy');
    Route::post('/admin/gallery/update/{slug}', [GalleryController::class, 'update'])->name('galleryAdmin.update');

    //User Management


    // Gallery Category Management
    Route::post('/admin/category/add', [CategoryGalleryController::class, 'store'])->name('galleryCategoryAdmin.store');
    Route::delete('/admin/category/delete/{slug}', [CategoryGalleryController::class, 'destroy'])->name('galleryCategoryAdmin.destroy');
    Route::post('/admin/category/update/{slug}', [CategoryGalleryController::class, 'update'])->name('galleryCategoryAdmin.update');

    //Type Property Management
    Route::post('/admin/typeProperty/add', [TipePropertyController::class, 'store'])->name('typePropertyAdmin.store');


});

Route::get('/admin/user', [AdminUserController::class, 'index'])->name('userAdmin.index')->middleware('super_admin');
Route::post('/admin/user/add', [AdminUserController::class, 'store'])->name('userAdmin.store')->middleware('super_admin');
Route::get('admin/user/role/{id}', [AdminUserController::class, 'role'])->name('userAdmin.role')->middleware('super_admin');
Route::delete('/admin/user/delete/{user}', [AdminUserController::class, 'destroy'])->name('userAdmin.destroy')->middleware('super_admin');
Route::post('/admin/user/update/{id}', [AdminUserController::class, 'update'])->name('userAdmin.update')->middleware('super_admin');


