<?php

use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\API\TaskController;
use App\Http\Controllers\API\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

// Route::get('/user', function (Request $request) {
//     return $request->user();
// })->middleware('auth:sanctum');

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login',[AuthController::class, 'login']);

Route::middleware('jwt')->group(function () {

    Route::post('/logout',[AuthController::class, 'logout']);

    Route::prefix('/task')->group(function () {
        Route::get('/', [TaskController::class,'index']);
        Route::get('/{id?}', [TaskController::class,'show']);
        Route::post('/create', [TaskController::class,'store']);
    });

    Route::prefix('/user')->group(function () {
        Route::get('/', [UserController::class,'index']);
        Route::get('/{id?}', [UserController::class,'show']);
        Route::post('/update/{id?}', [UserController::class,'update']);
    });
});