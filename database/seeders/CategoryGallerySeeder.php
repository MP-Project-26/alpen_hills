<?php

namespace Database\Seeders;

use App\Models\CategoryGallery;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CategoryGallerySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        CategoryGallery::insert([
            [
                'name' => 'Category 1',
                'slug' => 'category-1',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [

                'name' => 'Category 2',
                'slug' => 'category-2',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Category 3',
                'slug' => 'category-3',
                'created_at' => now(),
                'updated_at' => now(),

            ],
            [
                'name' => 'Category 4',
                'slug' => 'category-4',
                'created_at' => now(),
                'updated_at' => now(),
            ]
        ]);

    }
}
