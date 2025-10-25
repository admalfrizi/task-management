<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\User\UpdateUserRequest;
use App\Models\User;
use App\Services\Contracts\IUserService;
use App\Trait\ResponseHelper;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\JsonResponse;

class UserController extends Controller
{
    use ResponseHelper;

    protected IUserService $userService;

    public function __construct(IUserService $userService)
    {
        $this->userService = $userService;
    }

    /**
     * Display the specified resource.
     */
    public function show( $id )
    {
        try 
        {
            $responseData = $this->userService->getUserById( $id );
            
            return $this->responseSuccess(
                $responseData, 
                "User Data"
            );
        } 
        catch (ModelNotFoundException $e) 
        {
            return $this->responseError('User not register in this system !', 404);
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateUserRequest $updateReq, $id): JsonResponse
    {
        try 
        {
            $responseData = $this->userService->updateUserData( $updateReq->validated(),$id );
            
            return $this->responseSuccess(
                $responseData, 
                "User has been succesfully updated"
            );
        } 
        catch (ModelNotFoundException $e) 
        {
            return $this->responseError('User not register in this system !', 404);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(User $user)
    {
        //
    }
}
