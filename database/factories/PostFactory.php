<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Post>
 */
class PostFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [

            "title" => $this->faker->sentence(mt_rand(2, 4)),
            "category_post_id" => mt_rand(1, 4),
            "user_id" => mt_rand(1, 2),
            "slug" => $this->faker->slug(),
            "image" => $this->faker->image('public/storage/images/blog/', 800, 480, null, false),
            "excerpt" => $this->faker->paragraph(mt_rand(1, 1)),
            "body" => $this->faker->paragraph(mt_rand(5, 7)),
            "created_at" => now(),
            "updated_at" => now(),
        ];
    }
}
