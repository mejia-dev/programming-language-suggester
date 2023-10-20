let darkMode = false;

function getAnswers() {
  event.preventDefault();
  let name = document.getElementById("userName").value;
  let answerA = parseInt(document.getElementById("questionA").value);
  let answerB = document.getElementById("questionB").value;
  let answerC = (document.getElementById("questionC").value).length;
  let answerD = document.querySelector("input[name=questionD]:checked").value;
  let answerE = document.getElementById("questionE").value;
  showResults(name, answerA, answerB, answerC, answerE);
  showFrogMessage(answerD);
}

function showResults(in0, in1, in2, in3, in4) {
  if (in1 >= 3) {
    if (in2.includes("e") && (in3 > 6)) {
      document.getElementById("resultHeader").innerHTML = "You got: <span id=resultHeaderTitle style='color:" + in4 + "'>Python!</span>";
      document.getElementById("resultText").innerHTML = "Click <a href='https://google.com/search?q=learn+how+to+code+in+python' target='blank'>here</a> to search for resources online, "+ in0 + ".";
    } else if (in2.includes("e") && (in3 <= 6)) {
      document.getElementById("resultHeader").innerHTML = "You got: <span id=resultHeaderTitle style='color:" + in4 + "'>Ruby!</span>";
      document.getElementById("resultText").innerHTML = "Click <a href='https://google.com/search?q=learn+how+to+code+in+ruby' target='blank'>here</a> to search for resources online, "+ in0 + ".";
    } else {
      document.getElementById("resultHeader").innerHTML = "You got: <span id=resultHeaderTitle style='color:" + in4 + "'>Ruby!</span>";
      document.getElementById("resultText").innerHTML = "Click <a href='https://google.com/search?q=learn+how+to+code+in+ruby' target='blank'>here</a> to search for resources online, "+ in0 + ".";
    }
  } else {
    if (in2.includes("e") && (in3 > 4)) {
      document.getElementById("resultHeader").innerHTML = "You got: <span id=resultHeaderTitle style='color:" + in4 + "'>Rust!</span>";
      document.getElementById("resultText").innerHTML = "Click <a href='https://google.com/search?q=learn+how+to+code+in+rust' target='blank'>here</a> to search for resources online, "+ in0 + ".";
    } else if (in2.includes("e") && (in3 <= 4)) {
      document.getElementById("resultHeader").innerHTML = "You got: <span id=resultHeaderTitle style='color:" + in4 + "'>Ruby!</span>";
      document.getElementById("resultText").innerHTML = "Click <a href='https://google.com/search?q=learn+how+to+code+in+ruby' target='blank'>here</a> to search for resources online, "+ in0 + ".";
    } else {
      document.getElementById("resultHeader").innerHTML = "You got: <span id=resultHeaderTitle style='color:" + in4 + "'>Ruby!</span>";
      document.getElementById("resultText").innerHTML = "Click <a href='https://google.com/search?q=learn+how+to+code+in+ruby' target='blank'>here</a> to search for resources online, "+ in0 + ".";
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
    document.getElementById("contentHolder").setAttribute("class", "darkMode");
    document.getElementById("darkModeToggle").innerText = "Toggle Light Mode";
    darkMode = true;
  } else {
    document.getElementById("contentHolder").removeAttribute("class", "darkMode");
    document.getElementById("darkModeToggle").innerText = "Toggle Dark Mode";
    darkMode = false;
  }
}

window.addEventListener("load", function () {
  this.document.getElementById("questionInput").addEventListener("submit", getAnswers)
})



