<?php

namespace App\Services;

use App\Http\Resources\TaskResponse;
use App\Repositories\Contracts\ITaskRepository;
use App\Services\Contracts\ITaskService;
use Illuminate\Http\Resources\Json\JsonResource;

class TaskService implements ITaskService {

    protected ITaskRepository $taskRepository;
    
    public function __construct(ITaskRepository $taskRepository)
    {
        $this->taskRepository = $taskRepository;
    }

    /**
     * @inheritDoc
     */
    public function getOneTask(int $id): ?JsonResource 
    {
        $taskData = $this->taskRepository->getOneTask($id);

        return new TaskResponse($taskData);
    }

    /**
     * @inheritDoc
     */
    public function createNewTask(array $reqData): ?JsonResource 
    {
        $data = $this->taskRepository->addNewTask($reqData);

        return new TaskResponse($data);
    }

    /**
     * @inheritDoc
     */
    public function updateTask(int $id, array $data): ?JsonResource 
    {
        $updatedData = $this->taskRepository->updateTask($id, $data);
        return new TaskResponse($updatedData);
    }

    public function getTasks(int $userId): JsonResource 
    {
        $data = $this->taskRepository->getAllTask($userId);

        return TaskResponse::collection($data);
    }
}