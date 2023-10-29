<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Project;
use Illuminate\Http\Request;    
use Illuminate\Support\Facades\Auth;

class ProjectsController extends Controller
{
    public function getProjects()
    {
        try{
            $projects = Project::all();
            return response()->json($projects);
        }catch(\Throwable $th){
            return response()->json([
                "status" => false,
                "message"=> $th->getMessage(),
            ], 500);
        }
    }
    public function createProject(Request $request)
    {
        $project = new Project();

        try{
            $customMessage = [
                "title.required" => "Title field is required",
                "description.required" => "Description field is required",
                "img.required" => "Must have an image",
                "language.required" => "Langauge field is required",
                "role.required" => "Role field is required",
                "link.required" => "Link is required",
            ];
            
            $validatedData = $request->validate([
                "title" => "required", 
                "description" => "required",
                "img" => "required",
                "language" => "required",
                "role" => "required",
                "link" => "required",
            ], $customMessage);

            $project = Project::create($validatedData);

            return response()->json([
                "status" => true,
                "message" => "Project succesfully create",
            ]);
        }
        catch(\Throwable $th){
            return response()->json([
                "status" => false,
                "message" => $th->getMessage(),
            ], 500);
        }
    }
}
