const correctAnswers = ["B","A","A","A"];
const form = document.querySelector(".quiz-form");
const resultSpace = document.querySelector(".result");
// const percentage = document.querySelector(".percentage");
let scorePercentage;
let score = 0;
let totalScore = 4;
let userAnswers;


form.addEventListener('submit', e => {
  e.preventDefault();
  fetchAnswers();
  checkAnswers();
});

function fetchAnswers(){
  userAnswers = [form.q1.value,form.q2.value,form.q3.value,form.q4.value];
  // console.log(userAnswers);
}

function checkAnswers(){
  score=0;
  userAnswers.forEach((element,index) => {
    if(element===correctAnswers[index]){
      score+=1;
    }
   
  });
  scorePercentage = (score/totalScore)*100;
  console.log(scorePercentage);
  // once the score has been generated display it
  window.scrollTo(0,0);
  resultSpace.classList.remove("d-none");
  document.querySelector("body > div.result.py-4.bg-light.text-center > div > p > span").innerText=`${scorePercentage}%`;
  console.log(percentage);
}

