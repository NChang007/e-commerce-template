import User from "../models/userModal"
import dbConnect from "../mongoDB";
import genToken from "../utils/genToken";


// @desc    Register new user
// Route    POST /api/users
// @access  Public    
export async function POST(req, res) {
    let body = await req.json()
    const {name, email, password} = body

    await dbConnect()

    const userExists = await User.findOne({email})
    if(userExists) {
        return Response.json('User already exists')
    }

    const user = await User.create({
        name,
        email,
        password
    })
    if (user) {
        genToken(res, user._id)
        return Response.json({
            _id:    user._id,
            name:   user.name,
            email:  user.email
        })
    } else {
        return Response.json('Invalid user Data')
    }
}