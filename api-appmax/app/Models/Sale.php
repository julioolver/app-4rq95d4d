<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Sale extends Model
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
        static::created(function ($sale) {
            $sale->product()->decrement('quantity', $sale->quantity);
        });
    }
}
