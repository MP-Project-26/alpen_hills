<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\TipeProperty>
 */
class TipePropertyFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            "name" => $this->faker->sentence(mt_rand(2, 3)),
            "slug" => $this->faker->slug(),
            "created_at" => now(),
            "updated_at" => now(),
        ];
    }
}
