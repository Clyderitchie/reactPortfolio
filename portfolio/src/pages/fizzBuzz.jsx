import React, { useState, useEffect, useRef } from 'react';

function FizzBuzz() {
  const [score, setScore] = useState(parseInt(localStorage.getItem('score')) || 0);
  const [scores, setScores] = useState(JSON.parse(localStorage.getItem('scores')) || []);
  const [timer, setTimer] = useState(60);
  const [randomNumber, setRandomNumber] = useState(null);
  const [selectedBtn, setSelectedBtn] = useState('');
  const scoreListRef = useRef(null);
  const fizzRef = useRef(null);
  const buzzRef = useRef(null);
  const fizzBuzzRef = useRef(null);
  const nothingRef = useRef(null);
  const startBtnRef = useRef(null);
  const newGameBtnRef = useRef(null);
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
    // renderScores();
    startBtnRef.current.addEventListener('click', startTimer);
    newGameBtnRef.current.addEventListener('click', handleNewGameClick);
  }, []);

  const startTimer = () => {
    const newRandomNumber = Math.floor(Math.random() * 1000);
    setRandomNumber(newRandomNumber);

    const countdown = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer <= 0) {
          clearInterval(countdown);
          document.querySelector('#numberInput').innerHTML = 'Game Over';
          saveScore();
          return prevTimer;
        }
        document.querySelector('#timer').textContent = `Time left: ${prevTimer} seconds`;
        return prevTimer - 1;
      });
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

    setRandomNumber((prevRandomNumber) => {
      const newRandomNumber = Math.floor(Math.random() * 1000);
      return newRandomNumber;
    });
  };

  const randomNumbers = () => {
    let result = '';

    if (randomNumber % 15 === 0) {
      result = 'fizzBuzz';
    } else if (randomNumber % 3 === 0) {
      result = 'fizz';
    } else if (randomNumber % 5 === 0) {
      result = 'buzz';
    } else {
      result = 'nothing';
    }

    return result;
  };

  const saveScore = () => {
    const newScore = { id: "CR", score: score };
    const updatedScores = [...scores, newScore];
    const sortedScores = updatedScores.sort((a, b) => b.score - a.score);
    const topScores = sortedScores.slice(0, 5);
    setScores(topScores);
    localStorage.setItem('scores', JSON.stringify(topScores));
    setScore(0); // Reset the score to 0 after saving it
  };

  // const renderScores = () => {
  //   const scoreList = scoreListRef.current;
  //   scoreList.innerHTML = '';
  //   scores.forEach((score, index) => {
  //     const li = document.createElement('li');
  //     li.textContent = score.score;
  //     scoreList.appendChild(li);
  //   });
  // };

  const handleNewGameClick = () => {
    setScore(0);
    setTimer(60);
    const newRandomNumber = Math.floor(Math.random() * 1000);
    setRandomNumber(newRandomNumber);
    setSelectedBtn('');
  };

  return (
    <>
      {/* Intro and high score list */}
      <div className="container p-2 mt-5">
        <div className="row">
          <div className="col-8">
            <h2 className="text-light d-flex justify-content-center">
              Hello and welcome to my version of fizzbuzz!
            </h2>
          </div>
          <div className="col-4">
            <div id="highscore" className="col-6 text-light">
              <h2 className="text-light">High scores:</h2>
              <ol id="highscoreList" className="text-light" ref={scoreListRef}>
                {scores.slice(0, 5).map((score, index) => (
                  <li key={index}>{score.score}</li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>

      {/* Start and answer BTNS */}
      <div className="container">
        <div className="row mt-3">
          <div id="start-btn" className="col-6 d-flex justify-content-center">
            <button ref={startBtnRef} id="startBtn" type="button" className="btn btn-light" onClick={handleStartClick}>
              Start Game
            </button>
          </div>
          <div id="timer" className="col-4 d-flex justify-content-center fw-bold fs-4 text-light"></div>
          <div id="score" className="col-2 d-flex justify-content-center fw-bold fs-4 text-light">{score}</div>
        </div>
      </div>

      {/* User input */}
      <div className="container">
        <div className="row mt-3">
          <div className="col-6">
            <div className="d-grid gap-2 col-6 mx-auto">
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
          <div className="col-6 d-flex justify-content-center">
            <div id="numberInput" className="fw-bold fs-4 text-light">{randomNumber !== null && randomNumber}</div>
          </div>
        </div>
      </div>

      {/* Game rules */}
      <div className="container">
        <div className="row mt-3">
          <div id="rules" className="col-6 d-flex justify-content-center">
            <button type="button" className="btn btn-light" data-bs-toggle="modal" data-bs-target="#exampleModal">Game
              rules</button>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
              aria-hidden="true">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header bg-dark">
                    <h1 className="modal-title fs-5 text-light" id="exampleModalLabel">FizzBuzz rules.</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body bg-dark">
                    <p className="text-light">
                      The rules are very simple to the game, you have 60 seconds to determine what a number
                      will return. to
                      determine the
                      correct response a number that is divisible by 15 returns fizzBuzz, if it is divisible
                      by 5 it returns
                      buzz, and a number
                      divisible by 3 returns fizz! Each one you get right you get one point. Good luck!
                    </p>
                  </div>
                  <div className="modal-footer bg-dark">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="newGame" className="col-6 d-flex justify-content-center">
            <button id="newGameBtn" type="button" className="btn btn-light" ref={newGameBtnRef}>New Game</button>
          </div>
        </div>
      </div>
    </>
  )
};

export default FizzBuzz;