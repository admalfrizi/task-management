<?php

namespace App\Repositories\Contracts;

use App\Models\User;

interface IUserRepository {
    public function getUserData(?int $id = null, $email = null) : User;
    public function updateUserData($id, $user) : User;
}