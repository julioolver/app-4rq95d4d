<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Purchase extends Model
{
    use HasFactory;

    protected $fillable = [
        'sku',
        'quantity'
    ];

    public function product()
    {
        return $this->hasOne(Product::class, 'sku', 'sku');
    }

    protected static function booted()
    {
        static::created(function ($purchase) {
            $purchase->product()->increment('quantity', $purchase->quantity);
        });
    }
}
