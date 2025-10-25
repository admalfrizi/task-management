<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\Repositories\Contracts\ITaskRepository;
use App\Repositories\Contracts\IUserRepository;
use App\Repositories\{TaskRepository, UserRepository};

class RepositoriesProvider extends ServiceProvider
{
    /**
     * Register services.
     */
    public function register(): void
    {
        $this->app->singleton(IUserRepository::class, UserRepository::class);
        $this->app->singleton(ITaskRepository::class, TaskRepository::class);
    }

    /**
     * Bootstrap services.
     */
    public function boot(): void
    {
        //
    }
}
