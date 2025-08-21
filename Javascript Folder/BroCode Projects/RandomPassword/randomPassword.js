
// const passwordLength = 12;
// const includeLowerCase = true;
// const includeUpperCase =  true;
// const inludeNumbers = true;
// const includeSymbols = true; 

// function generatePassword(length, includeLowerCase, includeUpperCase, InludeNumbers, includeSymbols){
//    const lowerCaseChars =  "abcdefghijklmnopqrstuvwxyz" ;
//    const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//    const numberChars = "0123456789";
//    const sysmbolChars = "!@#$%^&*()/_+_+";

//    let allowedChars = "";
//    let password = "";

//    allowedChars +=  includeLowerCase ?  lowerCaseChars : "";
//    allowedChars +=  includeUpperCase ?  upperCaseChars : ""
//    allowedChars +=  InludeNumbers ?  numberChars : ""
//    allowedChars +=  includeSymbols ?  sysmbolChars : ""

//    if(length <= 0){
//         return (`Password length must be atleast 1`)
//    }
//    if(allowedChars.length === 0){
//         return (`Atleast 1 set of characters needs to be selected`)
//    }
//    for(let i = 0; i < length; i++){
//         const randomIndex = Math.floor(Math.random() * allowedChars.length);
//         password += allowedChars[randomIndex];
//    }
//    return password;

// //    console.log(allowedChars)
// }

// const password = generatePassword(passwordLength,
//                                 includeLowerCase, 
//                                 includeUpperCase, 
//                                 inludeNumbers, 
//                                 includeSymbols
//                             ); // callback the function
// document.writeln(`Random Password Generated: ${password}`)
// console.log(`Generated Password: ${password}`);

// shorter version 

const passwordLength = 12;
const includeLowerCase = true;
const includeUpperCase = true;
const includeNumbers = true;
const includeSymbols = true;

function generatePasswordAgain(passwordLength, includeLowerCase, includeUpperCase, includeNumbers, includeSymbols) {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
    let password = "";

    if(passwordLength <= 0){
        return  `Password length must be atleast 1`
    }
    if(includeLowerCase, includeUpperCase, includeNumbers, includeSymbols){
        for(let i = 0;  i  < passwordLength; i++){
            const randomIndex = Math.floor(Math.random() * chars.length);
            password += chars[randomIndex];
        }
    }
    return password;
}

const password = generatePasswordAgain(passwordLength, includeLowerCase, includeUpperCase, includeNumbers, includeSymbols);

console.log(`Password Generated: ${password}`);
