<?php

namespace App\Repositories;

use App\Http\Resources\UserResponse;
use App\Models\User;
use App\Repositories\Contracts\IAuthRepository;
use App\Repositories\Contracts\IUserRepository;
use Tymon\JWTAuth\Facades\JWTAuth;

class UserRepository implements IUserRepository, IAuthRepository {

    protected $model;

    /**
     * EloquentUserRepository constructor.
     *
     * @param User $model
     */
    public function __construct(User $model)
    {
        $this->model = $model;
    }

    /**
     * @inheritDoc
     */
    public function getUserData($id = null , $email = null): User {
        
        if($email)
        {
            $user = $this->model::where('email', $email)->first();
            return $user;
        }

        return $this->model::findOrFail($id);
    }

    /**
     * @inheritDoc
     */
    public function updateUserData($id, $data): bool {
        $findUser = $this->model::find($id);

        return $findUser->update($data);
    }

    /**
     * @inheritDoc
     */
    public function authenticateUser(array $data):? string
    {
        $token = JWTAuth::attempt($data);

        return $token;
    }

    /**
     * @inheritDoc
     */
    public function addNewUser(array $data): ?array 
    {
        $user = $this->model::create($data);
        $token = JWTAuth::fromUser($user);
        $tokenData = [
            "access_token" => $token,
            "token_type" => "Bearer"
        ];

        return [
            'user' => new UserResponse($user),
            'token' => $tokenData,
        ];
    }

    /**
     * @inheritDoc
     */
    public function signOut() {
        JWTAuth::invalidate(JWTAuth::getToken());
    }
}