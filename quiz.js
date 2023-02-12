const n1 = Math.ceil(Math.random() * 10);
const n2 = Math.ceil(Math.random() * 10);

const Question = document.getElementById('quis');
const input = document.getElementById('Qinput');
const form = document.getElementById('form');
const scoreElm = document.getElementById('score');

let score = JSON.parse(localStorage.getItem('score'));
if (!score || score <0) {
    score = 0;
}

Question.innerText = ` حاصل ضرب ${n1} في ${n2} ؟`;
scoreElm.innerText = `نقاطك: ${score}`;
const correctAnswer = n1 * n2;

form.addEventListener('submit', () => {
    const userAns = +input.value;

    if(userAns === correctAnswer){
        score++;
        ubdateLocalStrg();
    }else{
        score--;
        ubdateLocalStrg();
    }
})


function ubdateLocalStrg(){
    localStorage.setItem("score", JSON.stringify(score))
}