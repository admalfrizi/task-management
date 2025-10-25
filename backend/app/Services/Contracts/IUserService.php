<?php

namespace App\Services\Contracts;

interface IUserService {
    public function createNewData();
    public function readData();
    public function updateData();
    public function deleteData();
}