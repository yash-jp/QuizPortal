const correctAnswers = ["B","A","A"];
const form = document.querySelector(".quiz-form");
let score = 0;
let userAnswers;


form.addEventListener('submit', e => {
  e.preventDefault();
  fetchAnswers();
  checkAnswers();
});

function fetchAnswers(){
  userAnswers = [form.q1.value,form.q2.value,form.q3.value];
  // console.log(userAnswers);
}

function checkAnswers(){
  userAnswers.forEach((element,index) => {
    if(element===correctAnswers[index]){
      score+=1;
    }
  });
  console.log(score);
}

