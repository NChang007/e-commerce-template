import dbConnect from "../../mongoDB";
import User from "../../models/userModal";
import jwt from 'jsonwebtoken'

import { NextResponse,NextRequest } from "next/server";


// @desc    Auth user / Set Token / Login
// Route    POST /api/users/auth
// @access  Public  
export async function POST(req) {
    const { email, password } = await req.json()
    // check connection
    await dbConnect()
    
    const user = await User.findOne({ email })
    if (user && await user.matchPassword(password)) {
        console.log(user._id);
        let id = user._id
        const token = jwt.sign( {id} , process.env.JWT_SECRET, {expiresIn: '30d'})
        
        const response = NextResponse.json({
            _id:    user._id,
            name:   user.name,
            email:  user.email,
        })

        response.cookies.set('jwt', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV !== 'development',
            sameSite: 'strict',
            maxAge: 30 * 24 * 60 * 60 
        });

        return response
    } else {
        // res.status(401)
        return NextResponse.json({message:'Invalid Email or Password'})
        // throw new Error('Invalid Email or Password')
    }
}