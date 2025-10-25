<?php

namespace App\Repositories\Contracts;

use App\Models\Task;

interface ITaskRepository {
    public function addNewTask(array $data) : Task;
    public function getOneTask($id) : ?Task ;
    public function getAllTask();
    public function updateTask();
    public function deleteTask();
}