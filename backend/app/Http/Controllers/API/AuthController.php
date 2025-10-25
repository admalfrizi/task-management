<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\User\CreateUserRequest;
use App\Http\Requests\User\LoginUserRequest;
use App\Services\Contracts\IUserService;
use App\Trait\ResponseHelper;
use Exception;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;
use Tymon\JWTAuth\Exceptions\JWTException;

class AuthController extends Controller
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
            $responseData = $this->userService->authenticateUser($loginReq->validated());

            return $this->responseSuccess(
                $responseData, 
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
        try {
            $responseData = $this->userService->createUserData($userReq->validated());

            return $this->responseSuccess(
                $responseData, 
                "User data has been created !"
            );
        } catch (Exception $e) {
            return $this->responseError($e->getMessage(), 400);
        }
    }

    public function logout(): JsonResponse 
    {
        try 
        {
            $this->userService->logout();

            return $this->responseSuccess(
                null,
                "User succesfully logout"
            );
        } 
        catch (JWTException $e) 
        {
            return $this->responseError($e->getMessage(), code: 500);
        }
    }
}
