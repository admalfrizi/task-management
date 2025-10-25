<?php

namespace App\Repositories\Contracts;

use App\Models\User;

interface IAuthRepository {
    public function authenticateUser(array $data) :? string;
    public function createUserData(array $data) : ? User;
    public function signOut();
}