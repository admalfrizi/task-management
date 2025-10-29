<?php

namespace App\Http\Controllers\API;

use App\Http\Requests\Task\CreateTaskRequest;
use App\Http\Requests\Task\UpdateTaskRequest;
use App\Models\Task;
use App\Services\Contracts\ITaskService;
use App\Trait\ResponseHelper;
use Exception;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\JsonResponse;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class TaskController extends Controller
{
    use ResponseHelper;

    protected ITaskService $taskService;

    public function __construct(ITaskService $taskService)
    {
        $this->taskService = $taskService;
    }

    
    public function index(): JsonResponse
    {
        try 
        {
            $userId = Auth::id();
            $responseData = $this->taskService->getTasks($userId,);

            return $this->responseSuccess(
            $responseData,
            "All yours Task Data"
            );
        } 
        catch (Exception $e) 
        {
            return $this->responseError($e->getMessage(), 400);
        }
    }

    
    public function store(CreateTaskRequest $request): JsonResponse
    {
        try 
        {
            $validatedData = $request->validated();
            $validatedData["user_id"] = Auth::id();
            $validatedData["created_by"] = Auth::id();

            $responseData = $this->taskService->createNewTask($validatedData);  

            return $this->responseSuccess(
            $responseData,
            "Task data has been created successfully!"
            );
        } 
        catch (Exception $e) 
        {
            return $this->responseError($e->getMessage(), 400);
        }
    }

   
    public function show( $id ): JsonResponse
    {
        try 
        {
            $responseData = $this->taskService->getOneTask( $id );

            return $this->responseSuccess(
                $responseData, 
                "Task Data"
            );

        } catch (ModelNotFoundException $e) 
        {
            return $this->responseError('Data is not exist in this system !', 404);
        }
    }

    
    public function update(UpdateTaskRequest $updateReq, $id)
    {
        try 
        {
            $responseData = $this->taskService->updateTask($id ,$updateReq->validated());
            
            return $this->responseSuccess(
                $responseData, 
                "Task data has been succesfully updated"
            );
        } 
        catch (ModelNotFoundException $e) 
        {
            return $this->responseError('Data is not exist in this system !', 404);
        }
    }

    
    public function destroy($id)
    {
        try 
        {
            $responseData = $this->taskService->deleteTask($id);
            
            return $this->responseSuccess(
                $responseData, 
                "Task data has been succesfully deleted"
            );
        } 
        catch (ModelNotFoundException $e) 
        {
            return $this->responseError('Data is not exist in this system !', 404);
        }
    }
}
