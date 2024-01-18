function FizzBuzz() {
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
                        <button id="startBtn" type="button" class="btn btn-light">Start Game</button>
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
                            <button id="fizzBtn" class="btn btn-light" type="button">Fizz</button>
                            <button id="buzzBtn" class="btn btn-light" type="button">Buzz</button>
                            <button id="fizzBuzzBtn" class="btn btn-light" type="button">fizzBuzz</button>
                            <button id="nothingBtn" class="btn btn-light" type="button">Nothing</button>
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