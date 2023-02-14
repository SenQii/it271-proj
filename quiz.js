
const n1 = Math.ceil (Math.random()* 10 );
const n2 = Math.ceil(Math.random() * 10 );

const Question = document.getElementById('quis');
const input = document.getElementById('Qinput');
const form = document.getElementById('form');
const scoreElm = document.getElementById('score');
const ans = document.getElementById("ans");
let backg = document.getElementById("main");
let score = JSON.parse(localStorage.getItem('score'));
if (!score || score <0) {
    score = 0;
}
form.addEventListener('reset', () => {
   score = 0;
  scoreElm.innerText = `نقاطك: ${score}`;
})
Question.innerText = ` حاصل ضرب ${n1} في ${n2} ؟`;
scoreElm.innerText = `نقاطك: ${score}`;
const correctAnswer = n1 * n2;

form.addEventListener('submit', () => {
    const userAns = +input.value;
  
    if(userAns === correctAnswer){
backg.setAttribute("style", "background-color:#7bff7b;")
        score++;
        ubdateLocalStrg();
    document.getElementById("correct").innerHTML= " إجابة صحيحة!";
    }
    else{
      backg.setAttribute("style", "background-color:#f05555;")     
        score--;
        ubdateLocalStrg();
      
      document.getElementById("correct").innerHTML= " للأسف إجابة خاطئة.." 
    }
})



function ubdateLocalStrg(){
    localStorage.setItem("score", JSON.stringify(score))
  
}


