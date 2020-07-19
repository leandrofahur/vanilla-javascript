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



const randomNumber = getRandomNumber();
console.log(randomNumber);

const onSpeak = (evt) => {
  const msg = evt.results[0][0].transcript;
  // console.log(msg);
  writeMsg(msg);
  console.log(msg);
  console.log(msgElem);

  // checkNumber(msg);
}


recognition.start();
recognition.addEventListener('result', onSpeak);


