<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\CreateUserRequest;
use App\Http\Requests\LoginUserRequest;
use App\Models\User;
use App\Services\Contracts\IUserService;
use App\Trait\ResponseHelper;
use Exception;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Validation\ValidationException;
use Illuminate\Http\Request;
use \Illuminate\Http\JsonResponse;

class UserController extends Controller
{
    use ResponseHelper;

    protected IUserService $userService;

    public function __construct(IUserService $userService)
    {
        $this->userService = $userService;
    }

    public function login(LoginUserRequest $loginReq): JsonResponse
    {
        try {
            //$responseData = $this->userService->authenticateUser($loginReq->validated());

            return $this->responseSuccess(
                $loginReq, 
                "Welcome, User"
            );
        } catch (ValidationException $e) {
            return $this->responseError($e->getMessage(), 400);
        } catch (ModelNotFoundException $e) {
            return $this->responseError('User not register in this system !', 404);
        } catch (Exception $e) {
            return $this->responseError($e->getMessage(), 400);
        }
    }

    public function register(CreateUserRequest $userReq): JsonResponse
    {
        //return $this->userService->createUserData($userReq->validated());

        try {
            return $this->responseSuccess(
                $userReq, 
                "User data has been created !"
            );
        } catch (ValidationException $e) {
            return $this->responseError($e->getMessage(), 400);
        } catch (Exception $e) {
            return $this->responseError($e->getMessage(), 400);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(User $user)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, User $user)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(User $user)
    {
        //
    }
}
