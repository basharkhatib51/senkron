<?php

namespace App\Http\Controllers\Api\Authenticate;

use App\Http\Controllers\Controller;
use App\Http\Resources\User\UserResource;
use App\Models\SocialAccount;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Illuminate\Validation\ValidationException;
use Laravel\Socialite\Facades\Socialite;
use Spatie\Permission\Models\Role;

class SocialAuthController extends Controller
{
    public function redirectToProvider($provider)
    {
        $url = Socialite::driver($provider)->stateless()->redirect()->getTargetUrl();
        return response()->json([
            'url' => $url
        ]);
    }

    public function handleProviderCallback(Request $request, $provider)
    {
        $provider_user = Socialite::driver($provider)->stateless()->user();
//        dd($provider_user);
        if (!$provider_user->token) {
            throw ValidationException::withMessages([
                'Account' => ['failed there is no token in response.'],
            ]);
        } else {
            $user = User::whereEmail($provider_user->email)->first();
            if (!$user) {//user not exist
                $user = new User();
                $user->first_name = $provider_user->name;
                $user->last_name = $provider_user->nickname ?? $provider_user->name;
                $user->email = $provider_user->email;
                $user->user_name = explode('@',$provider_user->email)[0];
                $user->avatar = $provider_user->avatar;
                $user->email_verified_at = Carbon::now();
                $user->status = 'active';
                $user->password = Hash::make(Hash::make(Str::random(8)));
                $user->language = 'english';
                $user->save();
                $user->assignRole(2);
            } else {
                if (!$user->avatar && ($provider_user->avatar || $provider_user->user?->avatar))
                    $user->avatar = $provider_user->avatar ?? $provider_user->user?->avatar;
                $user->save();
            }
            if ($user->status != 'active') {
                throw ValidationException::withMessages([
                    'Account' => ['The Account is ' . $user->status . ' ' . $user->blocked_reason],
                ]);
            }
            $social_account = $user->social_accounts()->where('provider', $provider)->first();
            if (!$social_account) {//provider not exist
                $social_account = new SocialAccount();
                $social_account->provider = $provider;
                $social_account->provider_user_id = $provider_user->id;
                $social_account->user_id = $user->id;
                $social_account->save();
            }
        }
        $token = $user->createToken("$provider-login")->plainTextToken;
        return response()->json([
            'token' => $token,
            'user' => new UserResource($user)
        ]);

        // $user->token;
    }
}
