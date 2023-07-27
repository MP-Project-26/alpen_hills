<?php

namespace Database\Seeders;

use App\Models\TipeProperty;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class TipePropertySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        TipeProperty::insert([
            [
                'name' => 'Tipe 4 Meter',
                'slug' => 'tipe-4-meter',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Tipe 6 Meter',
                'slug' => 'tipe-6-meter',
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}
