<?php

namespace App\Services\Contracts;

use App\Models\User;
use \Illuminate\Http\JsonResponse;

interface IUserService {
    public function createUserData(array $data) : JsonResponse;
    public function authenticateUser(array $reqData) : array;
    public function getUserById(int $userId) :? User;
}