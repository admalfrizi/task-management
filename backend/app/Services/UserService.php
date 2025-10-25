<?php

namespace App\Services;

use App\Http\Resources\UserResponse;
use App\Models\User;
use App\Services\Contracts\IUserService;
use App\Repositories\Contracts\IUserRepository;
use App\Repositories\Contracts\IAuthRepository;
use Illuminate\Http\Resources\Json\JsonResource;
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
    public function updateUserData(array $data, $id): ?JsonResource 
    {
        $updateUser = $this->userRepository->updateUserData($id,$data);

        return new UserResponse($updateUser);
    }

    /**
     * @inheritDoc
     */
    public function authenticateUser(array $reqData): array 
    {
        $checkToken = $this->authRepository->authenticateUser($reqData);
        $user = $this->userRepository->getUserData( 0,$reqData["email"]);

        if ( !$checkToken ) 
        {
            return [];
        }

        return [
            "user"=> new UserResponse($user),
            "access_token" => $checkToken,
            "token_type" => "Bearer",
        ];
    }

    /**
     * @inheritDoc
     */
    public function getUserById(int $userId) :? JsonResource 
    {
        $userData = $this->userRepository->getUserData($userId);

        return new UserResponse($userData) ;
    }

    /**
     * @inheritDoc
     */
    public function logout() {
        $this->authRepository->signOut();
    }

    
}