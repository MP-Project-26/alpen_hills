<?php

namespace App\Http\Controllers;

use App\Models\User;
use Hash;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminUserController extends Controller
{

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Admin/User/Index', [
            'title' => 'User Management',
            'users' => User::all()
        ]);
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
        //add user
        $request->validate([
            [
                'name' => 'required|max:255',
                'email' => 'required|email:dns|unique:users,email|max:255',
                'password' => 'required|min:8|max:255',
            ],
            [
                'name.required' => 'Nama tidak boleh kosong',
                'name.max' => 'Nama maksimal 255 karakter',
                'email.required' => 'Email tidak boleh kosong',
                'email.email' => 'Email tidak valid',
                'email.unique' => 'Email sudah terdaftar',
                'email.max' => 'Email maksimal 255 karakter',
                'password.required' => 'Password tidak boleh kosong',
                'password.min' => 'Password minimal 8 karakter',
                'password.max' => 'Password maksimal 255 karakter',
            ]
        ]);

        //insert
        $user = new User();
        $user->name = $request->name;
        $user->email = strtolower($request->email);
        $user->password = Hash::make($request->password);
        $user->role = false;
        $user->save() ? back()->with('message', 'User berhasil ditambahkan') : back()->with('error', 'User gagal ditambahkan');
    }

    public function role($id  ) {
        //update role
        $user = User::find($id);
        $user->role = !$user->role;
        $user->save() ? back()->with('message', 'Role berhasil diubah') : back()->with('error', 'Role gagal diubah');
    }

    /**
     * Display the specified resource.
     */
    public function show(User $user)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(User $user)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, User $user)
    {


    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(User $user)
    {
        //delete user
        $user->delete() ? back()->with('message', 'User berhasil dihapus') : back()->with('error', 'User gagal dihapus');
    }
}
