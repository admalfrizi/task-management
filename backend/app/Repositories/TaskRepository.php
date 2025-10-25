<?php

namespace App\Repositories;

use App\Models\Task;
use App\Repositories\Contracts\ITaskRepository;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Collection;

class TaskRepository implements ITaskRepository {

    protected $model;

    /**
     * TaskRepository constructor.
     *
     * @param Task $model
     */
    public function __construct(Task $model)
    {
        $this->model = $model;
    }

    /**
     * @inheritDoc
     */
    public function addNewTask(array $data): Task 
    {
        $task = $this->model->create($data);
        return $task;
    }

    /**
     * @inheritDoc
     */
    public function deleteTask() {
    }

    /**
     * @inheritDoc
     */
    public function getAllTask($userId): Collection 
    {
        $allTask = $this->model::where("user_id", $userId)->get();

        return $allTask;
    }

    /**
     * @inheritDoc
     */
    public function getOneTask($id): ?Task 
    {
        return $this->model->findOrFail($id);
    }

    /**
     * @inheritDoc
     */
    public function updateTask($id, $data): Task 
    {
        $findTask = $this->model::find($id);
        $findTask->update($data);

        return $findTask;
    }
}