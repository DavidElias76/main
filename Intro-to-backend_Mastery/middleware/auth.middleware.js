import jwt from "jsonwebtoken"
import dotenv from"dotenv"
import User from "../models/user.model.js"

dotenv.config()

export const authorize = async (req, res, next) => {
    try {
        let token;

        if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
            token = req.headers.authorization.sppit(' ')[1];
        }

        if(!token) res.status(401).json({ message: "Unauthorized"})

        const decoded = jwt.decode(token, process.env.JWT_SECRET);  // the decoded returns the user with an userId propery

        const user = await User.findById(decoded.userId); // find the user with the decoded userId

        if(!user) res.status(401).json({message: "Unauthorized"})
            
        req.user = user;

        next();

    } catch (error) {
        res.status(401).json({ message: "Unauthorized", error: error.message })
    }
}