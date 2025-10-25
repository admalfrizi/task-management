<?php

namespace App\Http\Controllers\API;

use App\Http\Requests\Task\CreateTaskRequest;
use App\Models\Task;
use App\Services\Contracts\ITaskService;
use App\Trait\ResponseHelper;
use Exception;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
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


    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
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

    /**
     * Display the specified resource.
     */
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

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Task $task)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Task $task)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Task $task)
    {
        //
    }
}
