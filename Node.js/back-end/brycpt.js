
import crypto from 'crypto'

const password = 'user4'
const hashedPassword = crypto.createHash("sha256").update(password).digest("hex");

console.log(hashedPassword)