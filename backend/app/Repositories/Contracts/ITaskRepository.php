<?php

namespace App\Repositories\Contracts;

use App\Models\Task;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Collection;

interface ITaskRepository {
    public function addNewTask(array $data) : Task;
    public function getOneTask($id) : ?Task ;
    public function getAllTask($userId): Collection;
    public function updateTask($id, array $data) : Task;
    public function deleteTask();
}