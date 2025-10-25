<?php

namespace App\Repositories;

use App\Models\Task;
use App\Repositories\Contracts\ITaskRepository;

class TaskRepository implements ITaskRepository {

    /**
     * @inheritDoc
     */
    public function addNewTask(array $data): Task 
    {
        return Task::create($data);
    }

    /**
     * @inheritDoc
     */
    public function deleteTask() {
    }

    /**
     * @inheritDoc
     */
    public function getAllTask() {
    }

    /**
     * @inheritDoc
     */
    public function getOneTask($id): ?array {
    }

    /**
     * @inheritDoc
     */
    public function updateTask() {
    }
}