<?php

namespace App\Services;

use App\Models\User;
use App\Services\Contracts\IUserService;
use App\Repositories\Contracts\IUserRepository;
use App\Repositories\Contracts\IAuthRepository;
use Tymon\JWTAuth\Exceptions\TokenInvalidException;
use \Illuminate\Http\JsonResponse;

class UserService implements IUserService {

    protected IUserRepository $userRepository;
    protected IAuthRepository $authRepository;

    public function __construct(IUserRepository $userRepository, IAuthRepository $authRepository)
    {
        $this->userRepository = $userRepository;
        $this->authRepository = $authRepository;
    }

    /**
     * @inheritDoc
     */
    public function createUserData(array $data): ?array
    {
        $user = $this->authRepository->addNewUser($data);

        return $user;
    }

    /**
     * @inheritDoc
     */
    public function authenticateUser(array $reqData): array 
    {
        $checkToken = $this->authRepository->authenticateUser($reqData);
        $user = $this->userRepository->getUserData($email = $reqData["email"]);

        if ( !$checkToken ) 
        {
            return [];
        }

        return [
            "user"=> $user,
            "access_token" => $checkToken,
            "token_type" => "Bearer",
        ];
    }

    /**
     * @inheritDoc
     */
    public function getUserById(int $userId) :? User 
    {
        $userData = $this->userRepository->getUserData($userId);

        return $userData;
    }
}