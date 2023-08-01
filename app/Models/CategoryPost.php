<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CategoryPost extends Model
{
    protected $table = 'category_posts';
    protected $guarded = ['id'];
    use HasFactory;

    public function posts()
    {
        return $this->hasMany(Post::class);
    }
}
