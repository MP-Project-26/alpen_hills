<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Gallery extends Model
{
    use HasFactory;

    protected $guarded = ["id"];
    public function categoryGallery()
    {
        return $this->belongsTo(CategoryGallery::class, 'category_gallery_id');
    }

    public function tipeProperty()
    {
        return $this->belongsTo(TipeProperty::class, 'tipe_property_id');
    }
}
