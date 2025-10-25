<?php

namespace App\Repositories\Contracts;

interface IUserRepository {
    public function createNewData();
    public function readData();
    public function updateData();
    public function deleteData();
}