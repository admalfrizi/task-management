<?php

namespace App\Http\Services\Contracts;

interface ITaskService {
    public function createNewData();
    public function readData();
    public function updateData();
    public function deleteData();
}