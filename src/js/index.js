// jshint esversion: 6

window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

// The code below will detect speech
const recognition = new SpeechRecognition();
recognition.interimResults = true;

// This code will create the paragraph elements in the HTML
let p = document.createElement('p');
const words = document.querySelector('.words');
words.appendChild(p);

// This code will print out the spoken workds in the dialogue box
recognition.addEventListener('result', e => {
    const transcript = Array.from(e.results)
        .map(result => result[0])
        .map(result => result.transcript)
        .join('');

    const poopScript = transcript.replace(/poop|poo|shit|dump/gi, '💩');
    p.textContent = poopScript;

    if (e.results[0].isFinal) {
        p = document.createElement('p');
        words.appendChild(p);
    }
});

recognition.start();
