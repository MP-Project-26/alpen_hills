<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CategoryGallery extends Model
{
    use HasFactory;

    protected $guarded = ["id"];

    public function galleries()
    {
        return $this->hasMany(Gallery::class, 'category_gallery_id');
    }
}
