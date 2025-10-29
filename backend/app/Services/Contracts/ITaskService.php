<?php

namespace App\Services\Contracts;

use Illuminate\Http\Resources\Json\JsonResource;

interface ITaskService {
    public function getOneTask(int $id) : ? JsonResource;
    public function getTasks(int $userId) : ? JsonResource;
    public function createNewTask(array $data): ? JsonResource;
    public function updateTask(int $id, array $data) : ?JsonResource;

    public function deleteTask(int $id) : ? bool;
}