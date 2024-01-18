import React, { useState, useEffect, useRef } from 'react';

function FizzBuzz() {
  const [score, setScore] = useState(parseInt(localStorage.getItem('score')) || 0);
  const [scores, setScores] = useState(JSON.parse(localStorage.getItem('scores')) || []);
  const [timer, setTimer] = useState(60);
  const [randomNumber, setRandomNumber] = useState(Math.floor(Math.random() * 1000));
  const [selectedBtn, setSelectedBtn] = useState('');
  const fizzRef = useRef(null);
  const buzzRef = useRef(null);
  const fizzBuzzRef = useRef(null);
  const nothingRef = useRef(null);
  const startBtnRef = useRef(null);
  const handleStartClick = () => {
    startTimer();
  };
  const handleFizzClick = () => {
    setSelectedBtn('fizz');
    compareAnswers();
  };
  const handleBuzzClick = () => {
    setSelectedBtn('buzz');
    compareAnswers();
  };
  const handleFizzBuzzClick = () => {
    setSelectedBtn('fizzBuzz');
    compareAnswers();
  };
  const handleNothingClick = () => {
    setSelectedBtn('nothing');
    compareAnswers();
  };

  useEffect(() => {
    answerBtns();
    renderScores();
    startBtnRef.current.addEventListener('click', startTimer);
  }, []);

  const randomNumbers = () => {
    if (randomNumber % 15 === 0) {
      console.log('fizzBuzz');
    } else if (randomNumber % 3 === 0) {
      console.log('fizz');
    } else if (randomNumber % 5 === 0) {
      console.log('buzz');
    } else {
      console.log('nothing');
    }
    document.querySelector('#numberInput').innerHTML = randomNumber;
    return randomNumber;
  };

  const startTimer = () => {
    const countdown = setInterval(() => {
      setTimer((prevTimer) => prevTimer - 1);
      if (timer <= 0) {
        clearInterval(countdown);
        document.querySelector('#numberInput').innerHTML = 'Game Over';
        saveScore();
      }
      document.querySelector('#timer').textContent = `Time left: ${timer} seconds`;
    }, 1000);
  };

  const answerBtns = () => {
    fizzRef.current.addEventListener('click', () => {
      setSelectedBtn('fizz');
      compareAnswers();
    });
  
    buzzRef.current.addEventListener('click', () => {
      setSelectedBtn('buzz');
      compareAnswers();
    });
  
    fizzBuzzRef.current.addEventListener('click', () => {
      setSelectedBtn('fizzBuzz');
      compareAnswers();
    });
  
    nothingRef.current.addEventListener('click', () => {
      setSelectedBtn('nothing');
      compareAnswers();
    });
  };

  const compareAnswers = () => {
    if (selectedBtn === 'fizzBuzz' && randomNumber % 15 === 0) {
      setScore((prevScore) => prevScore + 1);
    } else if (selectedBtn === 'fizz' && randomNumber % 3 === 0) {
      setScore((prevScore) => prevScore + 1);
    } else if (selectedBtn === 'buzz' && randomNumber % 5 === 0) {
      setScore((prevScore) => prevScore + 1);
    } else if (selectedBtn === 'nothing' && randomNumber % 3 !== 0 && randomNumber % 5 !== 0 && randomNumber % 15 !== 0) {
      setScore((prevScore) => prevScore + 1);
    }
    console.log(score);
    //   setRandomNumber = Math.floor(Math.random() * 1000);
    document.querySelector('#numberInput').textContent = randomNumber;
  };

  const saveScore = () => {
    const newScore = { in: "CR", score };
    scores.push(newScore);
    scores.sort((a, b) => b.score - a.score);
    setScores(scores.slice(0, 5));
    renderScores();
    localStorage.setItem('scores', JSON.stringify(scores));
  };

  const renderScores = () => {
    const scoreListEl = document.querySelector('#highscoreList');
    scoreListEl.innerHTML = '';
    scores.forEach((score, index) => {
      const li = document.createElement('li');
      li.textContent = score.score;
      scoreListEl.appendChild(li);
    });
    const highscoreEl = document.querySelector('#highscore');
    highscoreEl.appendChild(scoreListEl);
  };

  return (
    <>
      <h1>hello here is fizzbuzz</h1>
      {/* Intro and high score list */}
      <div class="container p-2">
        <div class="row">
          <div class="col-8">
            <h2 class="text-light d-flex justify-content-center">
              Hello and welcome to my version of fizzbuzz!
            </h2>
          </div>
          <div class="col-4">
            <div id="highscore" class="col-6 text-light">
              <h2 class="text-light">High scores:</h2>
              <ol id="highscoreList" class="text-light"></ol>
            </div>
          </div>
        </div>
      </div>

      {/* Start and answer BTNS */}
      <div class="container">
        <div class="row mt-3">
          <div id="start-btn" class="col-6 d-flex justify-content-center">
            <button ref={startBtnRef} id="startBtn" type="button" class="btn btn-light" onClick={handleStartClick}>
              Start Game
              </button>
          </div>
          <div id="timer" class="col-4 d-flex justify-content-center fw-bold fs-4 text-light"></div>
          <div id="score" class="col-2 d-flex justify-content-center fw-bold fs-4 text-light"></div>
        </div>
      </div>

      {/* User input */}
      <div class="container">
        <div class="row mt-3">
          <div class="col-6">
            <div class="d-grid gap-2 col-6 mx-auto">
              <button ref={fizzRef} id="fizzBtn" className="btn btn-light" type="button" onClick={handleFizzClick}>
                Fizz
              </button>
              <button ref={buzzRef} id="buzzBtn" className="btn btn-light" type="button" onClick={handleBuzzClick}>
                Buzz
              </button>
              <button ref={fizzBuzzRef} id="fizzBuzzBtn" className="btn btn-light" type="button" onClick={handleFizzBuzzClick}>
                fizzBuzz
              </button>
              <button ref={nothingRef} id="nothingBtn" className="btn btn-light" type="button" onClick={handleNothingClick}>
                Nothing
              </button>
            </div>
          </div>
          <div class="col-6 d-flex justify-content-center">
            <div id="numberInput" class="fw-bold fs-4 text-light"></div>
          </div>
        </div>
      </div>

      {/* Game rules */}
      <div class="container">
        <div class="row mt-3">
          <div id="rules" class="col-6 d-flex justify-content-center">
            <button type="button" class="btn btn-light" data-bs-toggle="modal" data-bs-target="#exampleModal">Game
              rules</button>
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
              aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header bg-dark">
                    <h1 class="modal-title fs-5 text-light" id="exampleModalLabel">FizzBuzz rules.</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body bg-dark">
                    <p class="text-light">
                      The rules are very simple to the game, you have 60 seconds to determine what a number
                      will return. to
                      determine the
                      correct response a number that is divisible by 15 returns fizzBuzz, if it is divisible
                      by 5 it returns
                      buzz, and a number
                      divisible by 3 returns fizz! Each one you get right you get one point. Good luck!
                    </p>
                  </div>
                  <div class="modal-footer bg-dark">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="newGame" class="col-6 d-flex justify-content-center">
            <button id="newGameBtn" type="button" class="btn btn-light">New Game</button>
          </div>
        </div>
      </div>
    </>
  )
};

export default FizzBuzz;