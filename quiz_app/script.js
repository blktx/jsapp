const quizData = [
    {
        question: 'A male chicken is called',
        a: 'A hen',
        b: 'A chick',
        c: 'A rooster',
        correct: 'c'

    }, {
        question: 'Which word is used for the young of wolves, tigers, lions and foxes?',
        a: 'cub',
        b: 'pup',
        c: 'calf',
        correct: 'a'
    }, {
        question: 'A baby kangaroo is called',
        a: 'A cumb',
        b: 'A pup',
        c: 'A joey',
        correct: 'c'
    }, {
        question: 'Which word is used for a female dog and a female wolf?',
        a: 'queen',
        b: 'bitch',
        c: 'puppy',
        correct: 'b'
    }, {
        question: 'A vixen is a _______ fox.',
        a: 'male',
        b: 'female',
        c: 'young',
        correct: 'b'
    }
]
const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');

const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();



function loadQuiz() {
    deselectAnswer();
    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;


}

function getSelected() {

    let answer = undefined;
    answerEls.forEach((answerEl) => {

        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswer() {

    answerEls.forEach((answerEl) => {

        answerEl.checked = false;
    });

}


submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();
    // console.log(answer);

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            // TODO: Show results

            quiz.innerHTML = `<h2> You answered correctly at 
            ${score}/ ${quizData.length} question. </h2>
            
            <button onclick="location.reload()">Reload</button>`;
        }
    }





});