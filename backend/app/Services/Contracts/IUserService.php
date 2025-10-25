<?php

namespace App\Services\Contracts;
use Illuminate\Http\Resources\Json\JsonResource;

interface IUserService {
    public function createUserData(array $data) : ?array;
    public function updateUserData(array $data, $id) : ?JsonResource;
    public function authenticateUser(array $reqData) : array;
    public function getUserById(int $userId) :? JsonResource;
    public function logout();
}