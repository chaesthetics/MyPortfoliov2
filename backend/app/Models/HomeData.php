<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class HomeData extends Model
{
    use HasFactory; 
    protected $fillable =  [
        'firstname',
        'lastname',
        'description',
        'gitlink',
        'contactlink',
    ];
}
