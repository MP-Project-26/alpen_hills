<?php

namespace App\Providers;

use App\Models\TipeProperty;
use Illuminate\Support\ServiceProvider;
use Inertia\Inertia;

class PropertyServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap services.
     */
    public function boot(): void
    {

        Inertia::share('tipeProperty', TipeProperty::all());

    }
}
