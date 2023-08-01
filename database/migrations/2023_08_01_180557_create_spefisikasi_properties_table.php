<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('spefisikasi_properties', function (Blueprint $table) {
            $table->id();
            $table->foreignId('tipe_property_id');
            $table->string('attribute');
            $table->string('value');
            $table->string('icon');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('spefisikasi_properties');
    }
};
