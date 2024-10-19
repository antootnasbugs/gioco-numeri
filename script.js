// Variabili per i punteggi delle due squadre
let score1 = 0;
let score2 = 0;

// Funzione per generare un numero casuale e confrontarlo con i numeri inseriti dalle due squadre
function generaNumeroCasuale() {
  const minNumber = document.getElementById("minNumber").value;
  const maxNumber = document.getElementById("maxNumber").value;
  const number1 = document.getElementById("number1").value;
  const number2 = document.getElementById("number2").value;

  const min = parseInt(minNumber);
  const max = parseInt(maxNumber);
  const num1 = parseInt(number1);
  const num2 = parseInt(number2);

  // Genera un numero casuale tra min e max
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

  // Mostra il numero casuale generato
  document.getElementById("randomNumber").innerText =
    "Numero casuale generato: " + randomNumber;

  // Funzione per determinare quale squadra è più vicina al numero casuale
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
      return 1; // Squadra 1 vince
    } else if (diffB < diffA) {
      return 2; // Squadra 2 vince
    } else {
      return "Pareggio."; // Pareggio
    }
  }

  // Determina la squadra vincente
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

  // Aggiorna i punteggi visualizzati
  document.getElementById("score1").innerText = score1;
  document.getElementById("score2").innerText = score2;
}

// Funzione per abilitare il pulsante solo quando i numeri delle squadre sono riempiti
function controllaInput() {
  const number1 = document.getElementById("number1").value;
  const number2 = document.getElementById("number2").value;
  const generateBtn = document.getElementById("generateBtn");

  // Abilita il pulsante solo se entrambi i numeri sono stati inseriti
  if (number1 && number2) {
    generateBtn.disabled = false;
  } else {
    generateBtn.disabled = true;
  }
}

function reset() {
  // Resetta i punteggi
  score1 = 0;
  score2 = 0;
  document.getElementById("score1").innerText = score1;
  document.getElementById("score2").innerText = score2;

  // Resetta il valore dello slider
  slider1Value = 1;
  document.getElementById("slider1").value = slider1Value; // Imposta il valore dell'input range
  document.getElementById("slider1Value").innerText = slider1Value; // Aggiorna il testo visibile

  // Resetta eventuali messaggi nel campo di confronto
  document.getElementById("comparisonResult").innerText = "";
}
document.getElementById("resetBtn").addEventListener("click", reset);
// Aggiungi eventi di input per controllare se abilitare/disabilitare il pulsante
document.getElementById("number1").addEventListener("input", controllaInput);
document.getElementById("number2").addEventListener("input", controllaInput);

// Aggiungi l'evento al click del bottone per generare il numero casuale
document
  .getElementById("generateBtn")
  .addEventListener("click", generaNumeroCasuale);

document.getElementById("slider1").addEventListener("input", function () {
  document.getElementById("slider1Value").innerText = this.value; // Mostra il valore corrente
});
/* document.getElementById("toggleBtn").addEventListener("click", function () {
  const gifs = document.querySelectorAll("#gif-container img");
  gifs.forEach((gif) => {
    const originalSrc = gif.src;
    gif.src = originalSrc.replace(/\.gif$/, ".webp");
  });
}); */
/* document.querySelector(".toggleBtn").addEventListener("click", function () {
  const gifs = document.querySelectorAll("#gif-container img");
  gifs.forEach((gif) => {
    // Ottieni il src originale e il primo frame statico dall'attributo data-static
    const staticSrc = gif.getAttribute("data-static");
    // Sostituisci il src della gif con il primo frame se staticSrc è presente
    if (staticSrc) {
      gif.src = staticSrc;
    }
  });
}); */
/* document.querySelector(".toggleBtn").addEventListener("click", function () {
  const gifs = document.querySelectorAll("#gif-container img");
  gifs.forEach((gif) => {
    // Ottieni il primo frame statico dall'attributo data-static
    const staticSrc = gif.getAttribute("data-static");
    // Se l'immagine non è già stata sostituita
    if (gif.src.endsWith(".gif")) {
      // Crea un nuovo elemento img per il primo frame
      const staticImage = document.createElement("img");
      staticImage.src = staticSrc;
      staticImage.width = gif.width; // Mantieni le stesse dimensioni
      staticImage.height = gif.height;

      // Nascondi la GIF e inserisci l'immagine statica
      gif.style.display = "none"; // Nascondi la GIF
      gif.parentNode.insertBefore(staticImage, gif.nextSibling); // Aggiungi l'immagine statica dopo la GIF
    }
  });
}); */
let isGifPlaying = true; // Inizialmente, lo stato è true, quindi le GIF sono visibili

document.getElementById("toggleBtn").addEventListener("click", function () {
  const gifWrappers = document.querySelectorAll(".gif-wrapper");

  gifWrappers.forEach((wrapper) => {
    const gif = wrapper.querySelector(".gif");
    const overlayImage = wrapper.querySelector(".overlay-image");

    if (isGifPlaying) {
      // Se le GIF stanno giocando (true), fermiamo la GIF e mostriamo l'immagine statica
      gif.style.opacity = "0.5"; // Manteniamo la GIF ma con opacità ridotta (opzionale)
      overlayImage.style.display = "block"; // Mostra l'immagine sovrapposta
    } else {
      // Se le GIF sono già ferme (false), nascondiamo l'immagine e facciamo vedere la GIF
      gif.style.opacity = "1"; // Ripristina la visibilità normale della GIF
      overlayImage.style.display = "none"; // Nascondi l'immagine sovrapposta
    }
  });

  isGifPlaying = !isGifPlaying; // Inverte lo stato (true diventa false, e viceversa)
});
