import jwt from "jwt"


const JWT_SECRET = process.env.JWT_SECRET
const TOKEN_EXPIRY_SECONDS = process.env.TOKEN_EXPIRY_SECONDS

export const loginController  = async (req, res) => {
    const {username, password} = req.body;

    if(!username || !password) {
        res.status(400).json({message: 'fill out all the fields'})
    }

    const users = getUsers()

    const user = users.find(u=> u.username === username)

    const payload = {
        id: user.id,
        user: user.username,
        role: user.role
    }

    const token = jwt.sign(JWT_SECRET, payload, {
        expiresIn: TOKEN_EXPIRY_SECONDS,
    })

    res.status(201).json('Logged successfully', token)
}

// this is called by the verify/protected route when verifying the token that was sent to the client
export const authenticateJWT = async (req, res, next) => {
    const authHeader = req.header.authorization;
    
    if(!authHeader) {
        res.status(500).json({message: 'Authorization header missing'});
    }

    const token = authHeader.split(' ')[1]

    if (!token) {
        return res.status(401).json({ message: 'Token missing' });
    }

    try{
        const decoded = jwt.verify(token, JWT_SECRET)
        req.user = decoded;
        next();

    }catch(error) {
        return res.status(403).json({ message: 'Invalid or expired token' });
    } 
}