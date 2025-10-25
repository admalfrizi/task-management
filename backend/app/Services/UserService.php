<?php

namespace App\Services;

use App\Services\Contracts\IUserService;
use App\Repositories\Contracts\IUserRepository;
use Illuminate\Validation\ValidationException;

class UserService implements IUserService {

    protected IUserRepository $userRepository;

    public function __construct(IUserRepository $userRepository)
    {
        $this->userRepository = $userRepository;
    }

    /**
     * @inheritDoc
     */
    public function createUserData(array $data): \Illuminate\Http\JsonResponse 
    {

    }

    /**
     * @inheritDoc
     */
    public function authenticateUser(array $reqData) 
    {

    }

    /**
     * @inheritDoc
     */
    public function deleteData() 
    {

    }

    /**
     * @inheritDoc
     */
    public function updateData() 
    {
        
    }
}