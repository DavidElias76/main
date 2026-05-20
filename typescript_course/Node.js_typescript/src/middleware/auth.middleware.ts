import { Request, Response, NextFunction } from 'express'
import jwt from "jsonwebtoken"

declare global {
    namespace Express {
        interface Request {
            user?: { id: string; email: string }
        }
    }
}

export const authenticate = (req: Request, res: Response, next: NextFunction) => {
    const token = req.header('Authorization')?.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: 'No token provided' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as { id: string, email: string }
        req.user = decoded
        next()
    } catch (error) {
        res.status(401).json({ message: 'Invalid token' })
    }
}

export const authorize = (roles: string[]) => {
    return (req: Request, res: Response, next: NextFunction) => {
        if (!req.user) {
            return res.status(401).json({ message: 'Not authenticated' })
        }

        // this can be the req.user.role - to check the role of the user
        if (!roles.includes(req.user.email)) {
            return res.status(403).json({ message: 'Not authorized' })
        }

        next()
    }
}