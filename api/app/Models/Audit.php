<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Audit extends Model
{
    use HasFactory;

    public $timestamps = false;

    protected $fillable = [
        'form',
        'sku',
        'info',
        'date_time'
    ];

    protected $dates = [
		'date_time',
	];
}
