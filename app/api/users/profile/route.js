import jwt from 'jsonwebtoken'
import { NextResponse } from 'next/server'
import User from '../../models/userModal'


// @desc    Get user Profile
// Route    GET /api/users/profile
// @access  Private    
export async function GET(request) {
    const token = request.cookies.get('jwt')
    if (token) {
        try {
            const decoded = jwt.verify(token.value, process.env.JWT_SECRET)
            request.user = await User.findById(decoded.id).select('-password')
            NextResponse.next()
        } catch (error) {
            throw new Error('Not Authorized, invalid token')
        }
    } else {
        return Response.json('Not Authorized, No token',{status: 403})
    }
    const user = {
        _id :   request.user._id,
        name:   request.user.name,
        email:  request.user.email
    }
    return NextResponse.json(user)
}