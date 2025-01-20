<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\QuizController;

Route::get('/random-quiz', [QuizController::class, "getRandomQuiz"]);
