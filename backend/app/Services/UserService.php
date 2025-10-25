<?php

namespace App\Services;

use App\Contracts\IUserService;
use App\Repositories\Contracts\IUserRepository;

class UserService implements IUserService {

    protected IUserRepository $userRepository;

    public function __construct(IUserRepository $userRepository)
    {
        $this->userRepository = $userRepository;
    }

}