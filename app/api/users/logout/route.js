import { NextResponse } from "next/server"

// @desc    Logout user
// Route    POST /api/users/logout
// @access  Public    
export async function POST(req) {
    let response = NextResponse.json({
        message:"User Logged Out"
    })

    // Delete a cookie
	response.cookies.delete('jwt');
    return response
}
