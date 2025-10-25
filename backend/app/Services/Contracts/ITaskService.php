<?php

namespace App\Services\Contracts;

use Illuminate\Http\Resources\Json\JsonResource;

interface ITaskService {
    public function getOneTask(int $id) : ? JsonResource;
    public function createNewTask(array $data): ? JsonResource;
}