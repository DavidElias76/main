
const superHeros: string[] = []; // This defineds that the array is a type of string
const superHumans: number[] = []; // This defines that the array is a type of number

superHeros.push('Batman')
superHumans.push(23)

// It can also be defined as this:

const superHero: Array<number> = []; // This is a number array
const Hero: Array<string> = []; // This is a string array

// Adding the types of values in an array

type UserValue = {
    name: string;
    email: string;
    isActive: true
}

const heroDetails: UserValue[] = []; // The values added in this array has to have the following properties

heroDetails.push({ name: "johnDoe", email: "john@gmail.com", isActive: true }) // This is how the object should be passed when pushed in the array 
