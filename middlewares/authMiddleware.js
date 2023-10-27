import JWT from 'jsonwebtoken'
import userModel from '../models/userModel.js'

//protected routes token based

export const requireSignIn = async (req,res,next) =>{
    try {
    const decode = JWT.verify(req.headers.authorization, process.env.JWT_SECRET)
    req.user = decode;
    next()
    } catch (error) {
        console.log(error)
        return res.status(500).send({
            success:false,
            message:"Please Sign In First"
        })
    }    
}

//admin access
export const isAdmin = async (req,res,next)=>{
    try {
        const user = await userModel.findById(req.user._id)
        if(user.role !== 1){
            return res.status(401).send({
                success:false,
                message:"Unauthorised route",
            })
        }
        else{
            next();
        }
    } catch (error) {
        console.log(error)
        res.status(401).send({
            success:false,
            error,
            message:"error in admin middleware"
        })
    }
}