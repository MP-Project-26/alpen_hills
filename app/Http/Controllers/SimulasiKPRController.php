<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class SimulasiKPRController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('SimulasiKPR', [
            'title' => 'Simulasi KPR'
        ]);
    }

    public function simulateKPR(Request $request)
    {

        $validatedData = $request->validate([
            'nilai_properti' => 'required|numeric|min:1',
            'persentase_uang_muka' => 'required|numeric|min:0|max:100',
            'suku_bunga' => 'required|numeric|min:0',
            'jangka_waktu' => 'required|numeric|min:1',
        ]);

        $nilaiProperti = $validatedData['nilai_properti'];
        $persentaseUangMuka = $validatedData['persentase_uang_muka'];
        $sukuBunga = $validatedData['suku_bunga'];
        $jangkaWaktu = $validatedData['jangka_waktu'];

        $uangMuka = ($persentaseUangMuka / 100) * $nilaiProperti; // 10% * 1700000000 = 170 juta
        $pinjaman = $nilaiProperti - $uangMuka; // 1700000000 - 170000000 = 1530000000

        $pokokPinjaman = $pinjaman / ($jangkaWaktu * 12); // 1530000000 / (20 * 12) = 6375000
        $bungaPerTahun = $pinjaman * ($sukuBunga / 100); // 1530000000 * 1,3 = 1989000000

        $bungaPerBulan = $bungaPerTahun / 12; // 1989000000 / 12 = 165750000
        // $bungaPersenBulan = ($sukuBunga / 100) / 12; // 1,3 / 12 = 0,1083333333333333
        $jumlahBulan = $jangkaWaktu * 12; // 20 * 12 = 240
        $simulasi = $bungaPerBulan + $pokokPinjaman;

        $cicilanBulanan = $simulasi; //($pinjaman * $bungaPerBulan) / (1 - pow(1 + $bungaPerBulan, -$jumlahBulan));
        // $totalPembayaran = $cicilanBulanan * $jumlahBulan;



        $cicilanBulananFormatted = 'Rp ' . number_format($cicilanBulanan, 0, ',', '.');
        $totalPembayaranFormatted = 'Rp ' . number_format($pinjaman, 0, ',', '.');
        $uangMuka = 'Rp ' . number_format($uangMuka, 0, ',', '.');

        return response()->json([
            'cicilan_bulanan' => $cicilanBulananFormatted,
            'jumlah_pengajuan' => $totalPembayaranFormatted,
            'uang_muka' => $uangMuka,
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
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
