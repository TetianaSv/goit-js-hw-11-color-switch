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

// stopBtnEl.setAttribute("disabled", "true")

let timerID = null;


const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};


startBtnEl.addEventListener('click', startBtn);

function startBtn() {
   if (this.isActive) {
    return
   }
  
  this.isActive = true;

  timerID = setInterval(() => { document.body.style.background = colors[randomIntegerFromInterval(0, colors.length - 1)] },
    NOTIFICATION_DELAY);
  
};

stopBtnEl.addEventListener('click', stopBtn);

function stopBtn() {
  this.isActive = false;
  console.log(`bye`)
  clearInterval(timerID);
};
 







// function addStyleForBody() {
//   document.body.style.background = 
// }

// const timer = {
//    setInterval(logger, NOTIFICATION_DELAY);
// }




// const timer = NOTIFICATION_DELAY => startSwitch();
// const startSwitch = {
// };


// setInterval(timer, NOTIFICATION_DELAY, NOTIFICATION_DELAY);

// const intervalId = setInterval(timer, NOTIFICATION_DELAY, NOTIFICATION_DELAY);
// const shouldCancelInterval = Math.random() > 0.3;
// console.log(shouldCancelInterval);

// if (shouldCancelInterval) {
//   clearInterval(intervalId);
// };