<?php

namespace App\Repositories\Contracts;

interface IUserRepository {
    public function insertData();
    public function readData();
    public function logout();
}