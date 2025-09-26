
// add a prefix keyword "export" to export all the functions in this file

export const PI = 3.14

export const getCircumference = (radius)=> {
    return 2 * PI * radius;
}

export const getArea = (radius)=> {
    return PI * radius * radius;
}

export const getVolume = (radius) => {
    return (4/3) *  PI * Math.pow(radius, 3);
}