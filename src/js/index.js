// jshint esversion: 6

window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

  // The code below will detect speech
const recognition = new SpeechRecognition();
recognition.interimResults = true;

recognition.start();

