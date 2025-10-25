<?php

namespace App\Repositories\Contracts;

interface ITaskRepository {
    public function createNewData();
    public function readData();
    public function updateData();
    public function deleteData();
}