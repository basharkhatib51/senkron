<?php

namespace App\Policies;

use App\Models\Menu;
use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;
use Illuminate\Auth\Access\Response;

class MenuPolicy
{
    use HandlesAuthorization;

    /**
     * Determine whether the user can view any models.
     *
     * @param User $user
     * @return Response
     */
    public function viewAny(User $user): Response
    {
        return $user->hasPermissionTo('Menu') ?
            Response::allow() : Response::deny('You don\'t have permission to show Menu list');
    }

    /**
     * Determine whether the user can view the model.
     *
     * @param User $user
     * @param Menu $menu
     * @return Response
     */
    public function view(User $user, Menu $menu): Response
    {
        return $user->hasPermissionTo('Menu') ?
            Response::allow() : Response::deny('You don\'t have permission to show this Menu');
    }

    /**
     * Determine whether the user can create models.
     *
     * @param User $user
     * @return Response
     */
    public function create(User $user): Response
    {
        return $user->hasPermissionTo('Menu') ?
            Response::allow() : Response::deny('You don\'t have permission to create new Menu');
    }

    /**
     * Determine whether the user can update the model.
     *
     * @param User $user
     * @param Menu $menu
     * @return Response
     */
    public function update(User $user, Menu $menu): Response
    {
        return $user->hasPermissionTo('Menu') ?
            Response::allow() : Response::deny('You don\'t have permission to update this Menu');
    }

    /**
     * Determine whether the user can delete the model.
     *
     * @param User $user
     * @param Menu $menu
     * @return Response
     */
    public function delete(User $user, Menu $menu): Response
    {
        return $user->hasPermissionTo('Menu') ?
            Response::allow() : Response::deny('You don\'t have permission to delete this Menu');
    }

    /**
     * Determine whether the user can restore the model.
     *
     * @param User $user
     * @param Menu $menu
     * @return Response
     */
    public function restore(User $user, Menu $menu): Response
    {
        return $user->hasPermissionTo('Menu') ?
            Response::allow() : Response::deny('You don\'t have permission to restore this Menu');
    }

    /**
     * Determine whether the user can permanently delete the model.
     *
     * @return Response
     */
    public function forceDelete(): Response
    {
        return Response::deny('You don\'t have permission to force delete any Menu');
    }

    public function get_trashed(User $user): Response
    {
        return $user->hasPermissionTo('Menu') ? Response::allow() : Response::deny('You don\'t have permission to view trashed Menus');
    }
}
