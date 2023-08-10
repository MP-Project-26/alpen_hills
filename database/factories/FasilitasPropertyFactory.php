<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\FasilitasProperty>
 */
class FasilitasPropertyFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'tipe_property_id' => $this->faker->numberBetween(1, 2),
            'attribute' => $this->faker->word(),
            'value' => $this->faker->word(),
            'icon' => $this->faker->word(),
            'created_at' => now(),
            'updated_at' => now(),
        ];
    }
}
