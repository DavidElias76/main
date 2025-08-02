
// recursive function- allows ypu to call a function repeatedly until a base case is reached

// the countdown starts from 5 to 1
const recursiveCountdown = (number) =>  {
    if(number < 1){
        return;   
    }
    console.log(number);//  prints the number 5 to 1 going downwards
    recursiveCountdown(number - 1);
}
recursiveCountdown(5);

// the countdown  number starts from 1 to 5 going downwards
const recursiveCountdown2 = (number) => {
    if(number < 1){
        return;
    }
    recursiveCountdown2(5);
    console.log(number);
}
recursiveCountdown2(5);

// 
const recursiveCountdown3 = (number) =>  {
    console.log(`Function execution started for number: ${number}`);
    if(number <  1){
        console.log(`Base case reached, begin resolving stack`);
        return;
    }
    console.log(`Calling recursive countdown with a number: ${number -  1}`);
    recursiveCountdown3(number - 1);
    console.log(`Function executed for completed number: ${number}`);
}