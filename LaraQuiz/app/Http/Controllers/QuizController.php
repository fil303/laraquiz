<?php

namespace App\Http\Controllers;

use App\Models\Quiz;
use Illuminate\Http\Request;

class QuizController extends Controller
{
    public function getRandomQuiz()
    {
        $quiz = Quiz::inRandomOrder()->first();
        if(!$quiz){
            return response()->json([
                "status"  => false,
                "message" => "Success",
                "data"    => null
            ]);
        }

        return response()->json([
            "status"  => true,
            "message" => "Success",
            "data"    => $quiz
        ]);
    }
}
