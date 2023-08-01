<?php

namespace App\Http\Controllers\AuthAdmin;

use App\Http\Requests\LoginRequest;
use App\Models\User;
use App\Providers\RouteServiceProvider;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Auth;
use Hash;
use Inertia\Inertia;
use Inertia\Response;

class AuthController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): Response
    {
        return Inertia::render('login', [
            'title' => 'Login Admin',
            'status' => session('status'),
        ]);
    }

    public function show(User $user): Response
    {
        return Inertia::render('Admin/Profile/Index', [
            'title' => 'Profile',
            'user' => $user,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(LoginRequest $request): RedirectResponse
    {
        $request->authenticate();
        $request->session()->regenerate();
        return redirect()->intended(RouteServiceProvider::HOME);
    }

    public function update(Request $request, User $user)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users,email,' . $user->id,
            'new_password' => 'nullable|required_with:confirm_password|min:8|max:255',
            'confirm_password' => 'nullable|max:255|same:new_password|required_with:new_password',
        ], [
            'name.required' => 'Nama tidak boleh kosong',
            'name.max' => 'Nama maksimal 255 karakter',
            'email.required' => 'Email tidak boleh kosong',
            'email.email' => 'Email tidak valid',
            'email.unique' => 'Email sudah terdaftar',
            'email.max' => 'Email maksimal 255 karakter',
            'new_password.required_with' => 'Password baru tidak boleh kosong jika Konfirmasi password diisi',
            'new_password.min' => 'Password baru minimal 8 karakter',
            'new_password.max' => 'Password baru maksimal 255 karakter',
            'confirm_password.max' => 'Konfirmasi password maksimal 255 karakter',
            'confirm_password.same' => 'Konfirmasi password tidak sesuai',
            'confirm_password.required_with' => 'Konfirmasi password tidak boleh kosong jika Password baru diisi',
        ]);

        $userData = [
            'name' => $request->name,
            'email' => $request->email,
        ];

        if ($request->new_password && $request->confirm_password) {
            if (Hash::check($request->current_password, $user->password)) {
                $userData['password'] = Hash::make($request->new_password);
            } else {
                return back()->with('error', 'Password lama tidak sesuai');
            }
        }

        $user->update($userData) ? back()->with('message', 'Profile berhasil diupdate') : back()->with('error', 'Profile gagal diupdate');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request): RedirectResponse
    {
        Auth::logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();
        return redirect('/admin/login');
    }

    public function deleteAcount(User $user): RedirectResponse
    {
        $user->delete();
        return redirect()->route('login')->with('status', 'Akun berhasil dihapus');
    }
}
