function getAnswers() {
  let answerA = parseInt(document.getElementById("questionA").value);
  // let answerB = 
  let answerC = (document.getElementById("questionC").value).length;
  // let answerD = 
  let answerE = document.getElementById("questionA").value;
  showResults(answerA,answerB,answerC,answerD,answerE);
}

function showResults(in1,in2,in3,in4,in5) {

}

// UI
window.addEventListener("load", function() {
  event.preventDefault();
  this.document.getElementById("questionInput").addEventListener("submit", getAnswers)
})