import { aj } from "../config/arcjet,js";

export const arcjetMiddleware = async (req, res, next) => {
    try {
        // protect the request and tell me your decision
        const decision = await aj.protect(req);

        // check the reason for denying the request
        if(decision.isDenied()) {
            if(decision.reason.isRateLimit()) res.status(429).json({ error: "Rate Limiter exceeded"}); // the rate limit error
            if(decision.reason.Bot()) res.status(403).json({ error: "Bot Detected"}); // the bot error
            
            return res.status(403).json({ error: "Access denied"});
        }

        next();
        
    } catch (error) {
        console.log(`Arcjet Middleware Error: ${error.message}`)
        next(error)
    }
}