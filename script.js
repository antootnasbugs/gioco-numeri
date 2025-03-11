let score1 = 0;
let score2 = 0;

function generaNumeroCasuale() {
  const minNumber = document.getElementById("minNumber").value;
  const maxNumber = document.getElementById("maxNumber").value;
  const number1 = document.getElementById("number1").value;
  const number2 = document.getElementById("number2").value;

  const min = parseInt(minNumber);
  const max = parseInt(maxNumber);
  const num1 = parseInt(number1);
  const num2 = parseInt(number2);

  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

  document.getElementById("randomNumber").innerText =
    "Numero casuale generato: " + randomNumber;

  function determinaSquadraVincente(a, b, target) {
    const diffA = Math.abs(a - target);
    const diffB = Math.abs(b - target);

    if (diffA === 0) {
      return 10;
    }
    if (diffB === 0) {
      return 20;
    }
    if (diffA < diffB) {
      return 1;
    } else if (diffB < diffA) {
      return 2;
    } else {
      return "Pareggio.";
    }
  }

  const squadraVincente = determinaSquadraVincente(num1, num2, randomNumber);

  if (squadraVincente === 10) {
    let sliderValue = parseInt(document.getElementById("slider1").value, 10);
    score1 += sliderValue;
  } else if (squadraVincente === 20) {
    let sliderValue = parseInt(document.getElementById("slider1").value, 10);
    score2 += sliderValue;
  } else if (squadraVincente === 1) {
    score1++;
    document.getElementById("comparisonResult").innerText = "";
  } else if (squadraVincente === 2) {
    score2++;
    document.getElementById("comparisonResult").innerText = "";
  } else {
    document.getElementById("comparisonResult").innerText = squadraVincente;
  }

  document.getElementById("score1").innerText = score1;
  document.getElementById("score2").innerText = score2;
}

function controllaInput() {
  const number1 = document.getElementById("number1").value;
  const number2 = document.getElementById("number2").value;
  const generateBtn = document.getElementById("generateBtn");

  if (number1 && number2) {
    generateBtn.disabled = false;
  } else {
    generateBtn.disabled = true;
  }
}

function reset() {
  score1 = 0;
  score2 = 0;
  document.getElementById("score1").innerText = score1;
  document.getElementById("score2").innerText = score2;

  slider1Value = 1;
  document.getElementById("slider1").value = slider1Value;
  document.getElementById("slider1Value").innerText = slider1Value;

  document.getElementById("comparisonResult").innerText = "";
}
document.getElementById("resetBtn").addEventListener("click", reset);

document.getElementById("number1").addEventListener("input", controllaInput);
document.getElementById("number2").addEventListener("input", controllaInput);

document
  .getElementById("generateBtn")
  .addEventListener("click", generaNumeroCasuale);

document
  .getElementById("generateBtn")
  .addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      generaNumeroCasuale();
    }
  });

document.getElementById("slider1").addEventListener("input", function () {
  document.getElementById("slider1Value").innerText = this.value;
});
let isGifPlaying = true;

document.getElementById("toggleBtn").addEventListener("click", function () {
  const gifWrappers = document.querySelectorAll(".gif-wrapper");

  gifWrappers.forEach((wrapper) => {
    const gif = wrapper.querySelector(".gif");
    const overlayImage = wrapper.querySelector(".overlay-image");

    if (isGifPlaying) {
      gif.style.opacity = "0.5";
      overlayImage.style.display = "block";
    } else {
      gif.style.opacity = "1";
      overlayImage.style.display = "none";
    }
  });

  isGifPlaying = !isGifPlaying;
});
