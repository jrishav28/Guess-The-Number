'use strict';
let score = 20;
let highScore = 0;
let secretNumber = Math.trunc(Math.random() * 20) + 1;
//console.log(secretNumber);
console.log(document.querySelector('.message').textContent);

//console.log((document.querySelector('.number').textContent = 13));
//console.log((document.querySelector('.guess').value = 10));

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // FUNCTION FOR DIDPLAYING MESSAGE
  const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
  };

  //if no value entered
  if (!guess) {
    displayMessage('not a number');
  }
  //correct guess
  else if (guess === secretNumber) {
    document.querySelector('.number').textContent = secretNumber;
    // document.querySelector('.message').textContent =
    displayMessage('🎈🎈🎈 correct guess 🎈🎈🎈');
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '30rem';
    //channge high score
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = score;
    }
  } else if (score !== secretNumber) {
    if (score > 1) {
      //   document.querySelector('.message').textContent =
      displayMessage(
        guess > secretNumber ? '🔼🔼🔼  too high' : 'too low  🔽🔽🔽'
      );
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('😥😥 lost 😢😢');
      document.querySelector('.score').textContent = 'keep trying ';
    }
  }
});
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = score;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
});

