const quizDB = [
    {
        question: "Q1: What is Capital of  India ? ",
        a: "Kolkata",
        b: "Mumbai",
        c: "Delhi",
        d: "Rajasthan",
        ans: "ans3"
    },
    {
        question: "Q2: Where is Redfort ? ",
        a: "Kolkata",
        b: "Mumbai",
        c: "Rajasthan",
        d: "Delhi",
        ans: "ans4"
    },
    {
        question: "Q3: How many states in India ? ",
        a: "28",
        b: "19",
        c: "30",
        d: "24",
        ans: "ans1"
    },
    {
        question: "Q4: Who is the PM of Inida ? ",
        a: "Rahul Gandhi",
        b: "Narendra Modi",
        c: "Akhilesh",
        d: "Amit shah",
        ans: "ans2"
    },
    {
        question: "Q5: Who is the CM of UP ? ",
        a: "Mayawati",
        b: "Rahul Gandhi",
        c: "Akhilesh",
        d: "Yogi",
        ans: "ans4"
    },
];

const question = document.querySelector('.question');
const opt1 = document.querySelector('#opt1');
const opt2 = document.querySelector('#opt2');
const opt3 = document.querySelector('#opt3');
const opt4 = document.querySelector('#opt4');

const submit= document.querySelector('#submit');

const answers = document.querySelectorAll('.answer');

const showScore = document.querySelector('#showScore');

let questionCount = 0;
let score = 0;

const  loadQuestion = () => {
    const questionList = quizDB[questionCount];
    question.innerText = questionList.question;

    opt1.innerText = questionList.a;
    opt2.innerText = questionList.b;
    opt3.innerText = questionList.c;
    opt4.innerText = questionList.d;
}

loadQuestion();

const getCheckAnswer = () => {
    let answer;

    answers.forEach((curAnsElem) => {
        if(curAnsElem.checked){
            answer = curAnsElem.id;
        }
    });
    return answer;
};

// unchecked bydefault check operations

const deleteAll = () => {
    answers.forEach((curAnsElem) => curAnsElem.checked = false);
}

submit.addEventListener('click',() => {
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);

    // Comapring ans

    if(checkedAnswer== quizDB[questionCount].ans){
        score++;
    };
    questionCount++;
    deleteAll();

    if(questionCount < quizDB.length){
        loadQuestion();
    }else{
        showScore.innerHTML = `<h3> You scored ${score}/${quizDB.length}Very Strong</h3>
        <button class="btn" onclick="location.reload()"> Play Again</button>
        `;
        showScore.classList.remove('scoreArea');
    };
});