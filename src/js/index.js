// jshint esversion: 6

window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

// The code below will detect speech
const recognition = new SpeechRecognition();
recognition.interimResults = true;

let p = document.createElement('p');
const words = document.querySelector('.words');
words.appendChild(p);

recognition.start();
