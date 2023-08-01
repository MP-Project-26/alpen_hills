<?php

namespace App\Http\Controllers;

use App\Models\CategoryPost;
use App\Http\Requests\StoreCategoryPostRequest;
use App\Http\Requests\UpdateCategoryPostRequest;

class CategoryPostController extends Controller
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
    public function store(StoreCategoryPostRequest $request)
    {
        //
        $categoryPost = CategoryPost::create($request->validated()) ? back()->with('message', 'Category Post Created') : back()->with('error', 'Category Post Failed to Create') ;
    }

    /**
     * Display the specified resource.
     */
    public function show(CategoryPost $categoryPost)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(CategoryPost $categoryPost)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateCategoryPostRequest $request, CategoryPost $categoryPost)
    {
        $categoryPost->update($request->validated()) ? back()->with('message', 'Category Post Updated') : back()->with('error', 'Category Post Failed to Update') ;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(CategoryPost $categoryPost)
    {
        //
        $categoryPost->delete() ? back()->with('message', 'Category Post Deleted') : back()->with('error', 'Category Post Failed to Delete') ;
    }
}
