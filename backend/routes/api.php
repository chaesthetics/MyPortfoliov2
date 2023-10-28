<?php

use App\Http\Controllers\Api\ProjectsController;
use App\Http\Controllers\Api\UserController;
use App\Http\Controllers\homeController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
}); 


Route::post('/auth/register', [UserController::class, 'createUser']);
Route::post('/auth/login', [UserController::class, 'loginUser']);
Route::post('auth/register', [UserController::class, 'createUser']);
Route::get('/auth/user/{id}', [UserController::class, 'getUser']); 
Route::post('/auth/update/{id}', [UserController::class, 'updateUser']); 
Route::post('/auth/changeAvatar/{id}', [UserController::class, 'updateAvatar']);

Route::get("/auth/project", [ProjectsController::class, "getProjects"]);
Route::post("/auth/createproject", [ProjectsController::class,"createProject"]);