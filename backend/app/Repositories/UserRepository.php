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
     * UserRepository constructor.
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
        
        if($email && $id == 0)
        {
            $user = $this->model::where('email', $email)->first();
            return $user;
        }

        return $this->model::findOrFail($id);
    }

    /**
     * @inheritDoc
     */
    public function updateUserData($id, $data): User {
        $findUser = $this->model::find($id);
        $findUser->update($data);

        return $findUser;
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
            "token_type" => "Bearer",
            'expires_in'   => JWTAuth::factory()->getTTL() * 60,
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