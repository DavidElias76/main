
function getAverage(scores) {

    let total = 0;
    
    for(let i = 0; i < scores.length; i++){
        total += scores[i];
    }
    let average = total / scores.length;
    return average;
}

function getGrade(score){

    // using the if else statement
    if(score === 100){
        return "A+"
    }else if(score >= 90 && score <= 99){
        return "A";
    }else if(score >= 80 && score <= 89){
        return "B";
    }else if(score >= 70 && score <= 79){
        return "C";
    }else if(score >= 60 && score <= 69){
        return "D";
    }else if(score >= 0 && score <= 59){
        return "F";
    } else{
        return "undefined score";
    }
}

function hasPassingGrade(score){

    let grade = getGrade(score);

    // Now check if grade is NOT "F"
    if(grade !== "F" ){
        return true;
    }else{
        return false; // the returned value is false since the grade = F
    }
}
// student message

function studentMsg(scores, score){
    let average = getAverage(scores);
    let grade = getGrade(score);
    let passed = hasPassingGrade(score);

    if(passed){
        return `Class average: ${average}. Your grade: ${grade}. You passed the course.`;
    }else{
        return `Class average: ${average}. Your grade: ${grade}. You failed the course.`;
    }

}

 // passing an array argument scores and and the student score
document.writeln(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37) + "<br>");
// Expected: "Class average: 71.7. Your grade: F. You failed the course."

document.writeln(studentMsg([56, 23, 89, 42, 75, 11, 68, 34, 91, 19], 100) + "<br>");
// Expected: "Class average: 50.8. Your grade: A+. You passed the course."

