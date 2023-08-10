<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\CategoryGallery;
use App\Models\CategoryPost;
use App\Models\Comment;
use App\Models\FasilitasProperty;
use App\Models\Gallery;
use App\Models\Post;
use App\Models\SpefisikasiProperty;
use App\Models\TipeProperty;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();

        \App\Models\User::insert([
            [
                'name' => 'Test User',
                'email' => 'test@gmail.com',
                'password' => bcrypt('password'),
                'remember_token' => \Illuminate\Support\Str::random(10),
                'role' => false,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Putut Budiutomo',
                'email' => 'pututbudiutomo88@gmail.com',
                'password' => bcrypt('password'),
                'remember_token' => \Illuminate\Support\Str::random(10),
                'role' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ]
        ]);

        CategoryGallery::insert([
            [
                'name' => 'Denah',
                'slug' => 'denah',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Interior',
                'slug' => 'interior',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Exterior',
                'slug' => 'exterior',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Potongan',
                'slug' => 'potongan',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Siteplan',
                'slug' => 'siteplan',
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);

        TipeProperty::insert([
            [
                'name' => 'Tipe 4 Meter',
                'slug' => 'tipe-4-meter',
                'price' => 600000000,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Tipe 6 Meter',
                'slug' => 'tipe-6-meter',
                'price' => 800000000,
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
        Gallery::factory(5)->create();

        SpefisikasiProperty::factory(15)->create();
        FasilitasProperty::factory(15)->create();

        CategoryPost::insert([
            [
                'name' => 'Futniture',
                'slug' => 'futniture',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Property',
                'slug' => 'property',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'House',
                'slug' => 'house',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Kitchen',
                'slug' => 'kitchen',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Cleaning',
                'slug' => 'cleaning',
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);

        Post::factory(10)->create();
        Comment::factory(30)->create();
    }
}
