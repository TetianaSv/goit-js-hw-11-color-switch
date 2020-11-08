const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const NOTIFICATION_DELAY = 1000;

const startBtnEl = document.querySelector('[data-action="start"]');
const stopBtnEl = document.querySelector('[data-action="stop"]');

let timerID = null;


const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};


startBtnEl.addEventListener('click', startBtn);
stopBtnEl.addEventListener('click', stopBtn);

function startBtn() {
  
  stopBtnEl.addEventListener('click', stopBtn);
  startBtn.disabled = true;

  timerID = setInterval(() => { document.body.style.background = colors[randomIntegerFromInterval(0, colors.length - 1)] },
    NOTIFICATION_DELAY);
};


function stopBtn() {
  stopBtn.disabled = false;
  clearInterval(timerID);
};
 
