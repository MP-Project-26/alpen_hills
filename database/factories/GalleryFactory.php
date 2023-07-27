<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Gallery>
 */
class GalleryFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            //
            'name' => $this->faker->sentence(mt_rand(2, 4)),
            'slug' => $this->faker->slug(),
            'image' => $this->faker->image('public/storage/images/gallery/', 640, 480, null, false),
            'category_gallery_id' => $this->faker->numberBetween(1, 4),
        ];
    }
}
