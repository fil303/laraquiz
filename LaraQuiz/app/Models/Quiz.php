<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Quiz extends Model
{
    protected $fillable = [
        "question",
        "option_one",
        "option_two",
        "option_three",
        "option_four",
        "option_answer",
    ];
}
