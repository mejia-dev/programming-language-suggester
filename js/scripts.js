function getAnswers() {
  event.preventDefault();
  let answerA = parseInt(document.getElementById("questionA").value);
  let answerB = document.getElementById("questionB").value;
  let answerC = (document.getElementById("questionC").value).length;
  let answerD = document.querySelector("input[name=questionD]:checked").value;
  let answerE = document.getElementById("questionE").value;
  showResults(answerA,answerB,answerC,answerD,answerE);
}

function showResults(in1,in2,in3,in4,in5) {
  
}

// UI
window.addEventListener("load", function() {
  this.document.getElementById("questionInput").addEventListener("submit", getAnswers)
})