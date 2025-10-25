<?php

namespace App\Repositories\Contracts;

interface IAuthRepository {
    public function authenticateUser(array $data) :? string;
    public function createUserData();
    public function signOut();
}