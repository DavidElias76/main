
// A Cookie is a small teXt file that is stored in your computer tat is used to remember information about the user and stored in name value pair

// to create a cookie
document.cookie = "firstName='john; expires = Sun 1 January 2030: path= "/";"
document.cookie = "lastName='Doe; expires = Sun 1 January 2030; path = "/"; "

console.log(document.cookie)


function setCookie(name, value, daysToLive) {
    const date = new Date;
    date.setTime(date.getTime() + (daysToLive * 24 * 60 * 60))
    let expires = 'expires' + date.toUTCString()
    document.cookie = `${name} = ${value}; ${expires}; path = "/" `
}

setCookie('email', "johndoe@gmail.com", 365)

console.log(document.cookie)


// DELETE A COOKIE
function deleteCookie (name, value, daysToLive) {
    setCookie(null, null, null)
}

console.log(deleteCookie())

// GET THE COKKIE BY NAME - get the value of a cokkie by using the name and returns a valeu of the cookie 

function getCookie(name) {
    const cDecoded = decodeURIComponent(document.cookie)
    console.log(cDecoded)
    const cArray = cDecoded.split('; ')
    console.log(cArray)
    let result;

    cArray.forEach(element => {
        if(element.indexOf(name) === 0){
            result = element.substring(name.length + 1)
        }
    })

    return result
}

console.log(getCookie('firstName'))
console.log(getCookie('lastName'))

// USING THE NODE.JS TOKEN 

export const loginController = async (req, res) => {
    const {username, password}  = req.body

    const users = await getUsers()

    const user = users.find(u => u.usernae === username && u.password === password)

    const payload = {
        username: user.username
    }

    const token = jwt.sign(token, SECRET_KEY)

    res.cookie("token", token, {
         httpOnly: true,                              // not accessible via JS
        secure: process.env.NODE_ENV === "production", // HTTPS only in production
        sameSite: "strict",                          // protects against CSRF
        maxAge: 15 * 60 * 1000, // expiration time 
    })

    res.json({message: "logged in sucessfully", token})
    
}

export const authenticateJWT = async (req, res, next) => {
    const accessToken = req.cookie?.token;

    if(!accessToken){
        res.status(401).json({message: 'No access Token. Access denied'});
    }
    try{
        const decoded = jwt.verify(accessToken, SECRET_KEY);
        req.user = decoded;
        next();

    }catch(error){
        return res.status(403).json({ message: "Invalid or expired token" });
    }

}
