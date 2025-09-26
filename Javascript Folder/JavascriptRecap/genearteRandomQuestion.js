const questions = [
  {
    category: "Geography",
    question: "What is the capital of France?",
    choices: ["Paris", "Lyon", "Marseille"],
    answer: "Paris"
  },
  {
    category: "Science",
    question: "What planet is known as the Red Planet?",
    choices: ["Mars", "Jupiter", "Saturn"],
    answer: "Mars"
  },
  {
    category: "History",
    question: "Who was the first president of the United States?",
    choices: ["George Washington", "Thomas Jefferson", "Abraham Lincoln"],
    answer: "George Washington"
  },
  {
    category: "Literature",
    question: "Who wrote 'Romeo and Juliet'?",
    choices: ["William Shakespeare", "Charles Dickens", "Mark Twain"],
    answer: "William Shakespeare"
  },
  {
    category: "Math",
    question: "What is the value of π (pi) approximately?",
    choices: ["3.14", "2.72", "1.62"],
    answer: "3.14"
  }
];

// get random question

const getRandomQuestion = (question) =>{
    const randomQuestion = Math.floor(Math.random() * questions.length);
    return questions[randomQuestion];
}

// get random choices
const randomComputerChoice = (choices) => {
    const randomChoice = Math.floor(Math.random() * choices * length);
    return choices[randomChoice];
}

const getResults = (questionObj, computerChoice) =>  {
    if(questionObj === computerChoice){
        return "The computer's choice is correct!";
    }else{
        return `The computer's choice is wrong. The correct answer is: ${questionObj.answer}`;
    }
}

const q = getRandomQuestion(questions); // pick a random question
const compChoice = getRandomComputerChoice(q.choices); // computer picks an option
console.log(q.question);
console.log("Computer chose:", compChoice);
console.log(getResults(q, compChoice));



// Build a Record Collection

