<?php

namespace App\Services;

use App\Services\Contracts\IUserService;
use App\Repositories\Contracts\IUserRepository;

class UserService implements IUserService {

    protected IUserRepository $userRepository;

    public function __construct(IUserRepository $userRepository)
    {
        $this->userRepository = $userRepository;
    }


    /**
     * @inheritDoc
     */
    public function createNewData() {
    }

    /**
     * @inheritDoc
     */
    public function deleteData() {
    }

    /**
     * @inheritDoc
     */
    public function readData() {
    }

    /**
     * @inheritDoc
     */
    public function updateData() {
    }
}