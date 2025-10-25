<?php

namespace App\Http\Repositories\Contracts;

interface IUserService {
    public function createNewData();
    public function readData();
    public function updateData();
    public function deleteData();
}