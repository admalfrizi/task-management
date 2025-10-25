<?php

namespace App\Services\Contracts;

interface IUserService {
    public function createUserData(array $data) : \Illuminate\Http\JsonResponse;
    public function authenticateUser(array $reqData);
    public function updateData();
    public function deleteData();
}