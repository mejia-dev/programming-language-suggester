let darkMode = false;

function getAnswers() {
  event.preventDefault();
  let answerA = parseInt(document.getElementById("questionA").value);
  let answerB = document.getElementById("questionB").value;
  let answerC = (document.getElementById("questionC").value).length;
  let answerD = document.querySelector("input[name=questionD]:checked").value;
  let answerE = document.getElementById("questionE").value;
  showResults(answerA,answerB,answerC,answerE);
  showFrogMessage(answerD);
}

function showResults(in1,in2,in3,in4) {
  // in1 Greater than or equal to 3, you're destined for Ruby or Python
    // in2 include the letter "e" AND in3 is greater than 6, you're destined for Python
    // in2 include the letter "e" AND in3 is less than or equal to 6, you're destined for Ruby
    // in2 not include letter "e", you're destined for Ruby

  // in1 less than 3, you're destined for Ruby or Rust
    // in2 include the letter "e" AND in3 is greater than 4, you're destined for Rust
    // in2 include the letter "e" AND in3 is less than or equal to 4, you're destined for Ruby
    // in2 not include letter "e", you're destined for Ruby
    // in4 changes the title color of the resultant programming language
  
  if (in1 >= 3) {
    if (in2.includes("e") && (in3 > 6)) { 
      document.getElementById("resultHeader").innerHTML = "You got: <span id=resultHeaderTitle style='color:"+in4+"'>Python!</span>";
      document.getElementById("resultText").innerHTML = "Click <a href='https://google.com/search?q=learn+how+to+code+in+python' target='blank'>here</a> to search for resources online.";
    } else if (in2.includes("e") && (in3 <= 6)) {
      document.getElementById("resultHeader").innerHTML = "You got: <span id=resultHeaderTitle style='color:"+in4+"'>Ruby!</span>";
      document.getElementById("resultText").innerHTML = "Click <a href='https://google.com/search?q=learn+how+to+code+in+ruby' target='blank'>here</a> to search for resources online.";
    } else {
      document.getElementById("resultHeader").innerHTML = "You got: <span id=resultHeaderTitle style='color:"+in4+"'>Ruby!</span>";
      document.getElementById("resultText").innerHTML = "Click <a href='https://google.com/search?q=learn+how+to+code+in+ruby' target='blank'>here</a> to search for resources online.";
    }
  } else {
    if (in2.includes("e") && (in3 > 4)) { 
      document.getElementById("resultHeader").innerHTML = "You got: <span id=resultHeaderTitle style='color:"+in4+"'>Rust!</span>";
      document.getElementById("resultText").innerHTML = "Click <a href='https://google.com/search?q=learn+how+to+code+in+rust' target='blank'>here</a> to search for resources online.";
    } else if (in2.includes("e") && (in3 <= 4)) {
      document.getElementById("resultHeader").innerHTML = "You got: <span id=resultHeaderTitle style='color:"+in4+"'>Ruby!</span>";
      document.getElementById("resultText").innerHTML = "Click <a href='https://google.com/search?q=learn+how+to+code+in+ruby' target='blank'>here</a> to search for resources online.";
    } else {
      document.getElementById("resultHeader").innerHTML = "You got: <span id=resultHeaderTitle style='color:"+in4+"'>Ruby!</span>";
      document.getElementById("resultText").innerHTML = "Click <a href='https://google.com/search?q=learn+how+to+code+in+ruby' target='blank'>here</a> to search for resources online.";
    }
  }
}

function showFrogMessage(answer) {
  if (answer === "yes") {
    document.getElementById("frogMessage").innerText = "Frogs like you too 🐸";
  } else if (answer === "no") {
    document.getElementById("frogMessage").innerText = "";
  } else {
    document.getElementById("frogMessage").innerText = "And it's okay, frogs are normally indifferent to humans as well.";
  }
}

function toggleDarkMode() {
  if (darkMode === false) {
    document.querySelector("body").setAttribute("class","darkMode");
    darkMode = true;
  } else {
    document.querySelector("body").removeAttribute("class","darkMode");
    darkMode = false;
  }
}

// UI
window.addEventListener("load", function() {
  this.document.getElementById("questionInput").addEventListener("submit", getAnswers)
})



