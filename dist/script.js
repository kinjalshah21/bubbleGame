let timer = 60;
let score = 0;
let num = 0;

function increaseScore() {
  score += 10;
  document.querySelector("#score-val").textContent = score;
}
function decreaseScore() {
  score -= 1;
  document.querySelector("#score-val").textContent = score;

  if (score < -5) {
    document.querySelector(
      "#panel-bottom"
    ).innerHTML = `<div class="text-[#231942] text-3xl w-full h-full font-bold flex justify-center items-center">
        <h2>Better Luck Next Time!</h2>
    </div>`;
  }
}
function increaseTimer() {
  timer += 1;
  document.querySelector("#time-val").textContent = timer;
}

function getNewHit() {
  num = Math.floor(Math.random() * 10);
  document.querySelector("#hit-val").textContent = num;
}

function makeBubble() {
  let clutter = "";

  for (let i = 1; i <= 130; i++) {
    let num = Math.floor(Math.random() * 10);

    clutter += `
  <div
    class="w-10 h-10 bg-[#5E548E] rounded-full flex items-center justify-center hover:bg-[#231942] transition-colors hover:cursor-pointer">
    <h2 class="text-white text-xl font-bold font-mono">${num}</h2>
    </div>`;
  }

  document.querySelector("#panel-bottom").innerHTML = clutter;
}

function runTimer() {
  let timerValue = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#time-val").textContent = timer;
    } else {
      clearInterval(timerValue);
      document.querySelector(
        "#panel-bottom"
      ).innerHTML = `<div class="text-[#231942] text-3xl w-full h-full font-bold flex justify-center items-center">
        <h2>Your Score: ${score}</h2>
    </div>`;
    }
  }, 1000);
}

document
  .querySelector("#panel-bottom")
  .addEventListener("click", function (details) {
    let clickedNum = Number(details.target.textContent);
    if (clickedNum == num) {
      increaseTimer();
      increaseScore();
      getNewHit();
      makeBubble();
    } else {
      decreaseScore();
    }
  });

getNewHit();
runTimer();
makeBubble();
