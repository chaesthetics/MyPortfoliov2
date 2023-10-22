<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
class UserController extends Controller
{
    public function createUser(Request $request)
    {
        try{
            // $validateUser = Validator::make($request->all(),
            // [
            //     'name' => 'required',
            //     'email' => 'required|email|unique:users,email',
            //     'password' => 'required'
            // ]);

            // if($validateUser->fails()){
            //     return response()->json([
            //         'status' => false,
            //         'message' => 'Validation error',
            //         'errors' => $validateUser->errors()
            //     ], 401);
            // }

            $customMessages = [
                "firstname.required" => "This field is required",
                "lastname.required" => "This field is required",
                "email.required" => "This field is required",
                "password.required" => "This field is required",
                "description.required" => "This field is required",
                "githublink.required" => "This field is required",
                "contactlink.required" => "This field is required",
            ];

            $validatedData = $request->validate([
                "firstname" => 'required',
                "lastname" => 'required',
                "email" => 'required',
                "password" => 'required',
                "description" => 'required',
                "githublink" => 'required',
                "contactlink" => 'required',
            ], $customMessages);
            
            $user = User::create([
                'firstname' => $request->firstname,
                'lastname' => $request->lastname,
                'email' => $request->email,
                'password' => Hash::make($request->password),
                'description' => $request->description,
                'githublink' => $request->githublink,
                'contactlink' => $request->contactlink,
            ]);

            return response()->json([
                'status' => true,
                'message' => 'User created successfully',
                'token' => $user->createToken("API TOKEN")->plainTextToken
            ]);
        }catch(\Throwable $th){
            return response()->json([
                'status' => false,
                'message' => $th->getMessage()
            ], 500);
        }
    }

    public function getUser($id){
        return User::find($id);
    }

    public function loginUser(Request $request)
    {
        try{
            $validateUser = Validator::make($request->all(), 
            [
                'email' => 'required|email',
                'password' => 'required'
            ]);

            if($validateUser->fails()){
                return response()->json([
                    'status' => false,
                    'message' => 'Validation error',
                ], 401);
            }
            
            if(!Auth::attempt($request->only(['email', 'password']))){
                return response()->json([
                    'status' => false,
                    'message' => 'Email & password does not match with our records.',
                ], 401);
            }

            $user = User::where('email', $request->email)->first();

            return response()->json([
                'status' => true,
                'message' => 'User logged in successfully',
                'token' => $user->createToken("API TOKEN")->plainTextToken
            ], 200);
        }catch(\Throwable $th){
            return response()->json(
            [
                'status' => false,
                'message' => $th->getMessage()
            ], 500);
        }
    }
}
