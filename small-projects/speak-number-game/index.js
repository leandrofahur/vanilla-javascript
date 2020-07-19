window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition = new window.SpeechRecognition();

const msgElem = document.getElementById('msg');

const getRandomNumber = () => {
  return Math.floor(Math.random() * 100) + 1
}

const writeMsg = (msg) => {
  msgElem.innerHTML = `
    <div>You said:</div>
    <span class="box">${msg}</span>`;
}

const checkNumber = (msg) => {
  const num = +msg;
  if(isNaN) {
    msgElem.innerHTML += `<div>That is not a valid number</div>`;
    return;
  }
  if(num > 100 || num < 0) {
    msgElem.innerHTML += `<div>Number must be between 0 - 100</div>`;
    return;
  }
  if(num === randomNumber) {
    msgElem.innerHTML += `<div>You are right!</div>`;
    return;
  }
  if(num < randomNumber) {
    msgElem.innerHTML += `<div>go higher.</div>`;
    return;
  }
  if(num > randomNumber) {
    msgElem.innerHTML += `<div>Go lower</div>`;
    return;
  }
}


const randomNumber = getRandomNumber();
console.log(randomNumber);

const onSpeak = (evt) => {
  const msg = evt.results[0][0].transcript;
  // console.log(msg);
  writeMsg(msg);
  // console.log(msg);
  // console.log(msgElem);
  checkNumber(msg);
}


recognition.start();
recognition.addEventListener('result', onSpeak);


