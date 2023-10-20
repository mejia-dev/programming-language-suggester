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
  // in1 Greater than or equal to 3, you're destined for Ruby or Python
    // in2 include the letter "e" AND in3 is greater than 6, you're destined for Python
    // in2 include the letter "e" AND in3 is less than or equal to 6, you're destined for Ruby
    // in2 not include letter "e", you're destined for Ruby

  // in1 less than 3, you're destined for Ruby or Rust
    // in2 include the letter "e" AND in3 is greater than 4, you're destined for Rust
    // in2 include the letter "e" AND in3 is less than or equal to 4, you're destined for Ruby
    // in2 not include letter "e", you're destined for Ruby

  // in4 and in5 are just extra data for the time being and will be an extra feature in the page later
  
  if (in1 >= 3) {
    if (in2.includes("e") && (in3 > 6)) { 
      //Python!
      document.getElementById("resultHeader").innerHTML = "You got: <span id=resultHeaderTitle style='color:"+in5+"'>Python!</span>";
    } else if (in2.includes("e") && (in3 <= 6)) {
      //Ruby!
      document.getElementById("resultHeader").innerHTML = "You got: <span id=resultHeaderTitle style='color:"+in5+"'>Ruby!</span>";
    } else {
      //Ruby!
      document.getElementById("resultHeader").innerHTML = "You got: <span id=resultHeaderTitle style='color:"+in5+"'>Ruby!</span>";
    }
  } else {
    if (in2.includes("e") && (in3 > 4)) { 
      //Rust!
      document.getElementById("resultHeader").innerHTML = "You got: <span id=resultHeaderTitle style='color:"+in5+"'>Rust!</span>";
    } else if (in2.includes("e") && (in3 <= 4)) {
      //Ruby!
      document.getElementById("resultHeader").innerHTML = "You got: <span id=resultHeaderTitle style='color:"+in5+"'>Ruby!</span>";
    } else {
      //Ruby!
      document.getElementById("resultHeader").innerHTML = "You got: <span id=resultHeaderTitle style='color:"+in5+"'>Ruby!</span>";
    }
  }
}

// UI
window.addEventListener("load", function() {
  this.document.getElementById("questionInput").addEventListener("submit", getAnswers)
})



