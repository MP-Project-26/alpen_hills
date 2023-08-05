<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FasilitasProperty extends Model
{
    protected $guarded = ['id'];
    use HasFactory;

    public function tipeProperty()
    {
        return $this->belongsTo(TipeProperty::class, 'tipe_property_id');
    }
}
