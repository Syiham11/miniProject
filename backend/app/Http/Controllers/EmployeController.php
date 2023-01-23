<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Employe;

class EmployeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $employes = Employe::when($request->q, function($employes) use($request) {
            $employes->where('name', 'LIKE', '%' . $request->q . '%');
        })->orderBy('created_at', 'DESC')->paginate(10);
        return response()->json(['status' => '200', 'message'=>'Success', 'data' => $employes]);
    }

    public function countEmploye(Request $request)
    {
        $employesAll = Employe::count();
        $employesActive = Employe::where('status','active' )->count();
        $employesInactive = Employe::where('status', 'inactive')->count();
        $data = ['all' => $employesAll, 'active' => $employesActive, 'inactive' => $employesInactive ];
        return response()->json(['status' => '200', 'message'=>'Success', 'data' => $data]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $this->validate($request, [
            'name' => 'required|string|max:150',
            'company' => 'required|string|max:150',
            'department' => 'required|string|max:150',
            'nik' => 'required|string|max:150',
            'join_date' => 'required|string|max:150',
            'date_of_birth' => 'required|string|max:150',
            'status' => 'required|string|max:10'
        ]);
        Employe::create([
            'name' => $request->name,
            'company' => $request->company,
            'department'=> $request->department,
            'nik' => $request->nik,
            'join_date' => $request->join_date,
            'date_of_birth' => $request->date_of_birth,
            'status' => $request->status,


        ]);
        return response()->json(['status' => '200', 'message'=>'Success']);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $employes = Employe::find($id);
        return response()->json(['status' => '200', 'message'=>'Success', 'data' => $employes]);

    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {

        $employes = Employe::find($id);
        return response()->json(['status' => '200', 'message'=>'Success', 'data' => $employes]);

    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $this->validate($request, [
            'name' => 'required|string|max:150',
            'company' => 'required|string|max:150',
            'department' => 'required|string|max:150',
            'nik' => 'required|string|max:150',
            'join_date' => 'required|string|max:150',
            'date_of_birth' => 'required|string|max:150',
            'status' => 'required|string|max:10'
        ]);


        $employes = Employe::find($id);
        $employes->update([
            'name' => $request->name,
            'company' => $request->company,
            'department'=> $request->department,
            'nik' => $request->nik,
            'join_date' => $request->join_date,
            'date_of_birth' => $request->date_of_birth,
            'status' => $request->status
        ]);
        return response()->json(['status' => '200', 'message'=>'Success', 'data' => $employes]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $employes = Employe::find($id);
        $employes->delete();
        return response()->json(['status' => '200', 'message'=>'Success',]);

    }
}
