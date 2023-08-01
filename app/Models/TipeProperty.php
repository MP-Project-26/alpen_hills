<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TipeProperty extends Model
{
    protected $guarded = ["id"];
    use HasFactory;

    public function gallery()
    {
        return $this->hasMany(Gallery::class, 'tipe_property_id');
    }

    public function spefisikasiProperty()
    {
        return $this->hasMany(SpefisikasiProperty::class, 'tipe_property_id');
    }
}
