function Home() {
    return (
        <div class="container text-light">
            <div class="row">
                <div id="intro" class="col-6">
                    <h1 id="helloHome" class="fw-bolder">Hello Welcome to my portfolio</h1>
                    <p class="fw-bold fs-5 mt-2 ">
                        Hello, my name is Clyde and I am junior full stack developer who also has experience in programming
                        languages such as Java and Python. On this site there is many things to do and explore, from playing
                        games to checking out my
                        latest projects that I have done. Please if you like what you see feel free to contact me if you have
                        any questions! Thank you for visiting and enjoy!
                    </p>
                </div>
                <div id="explore" class="col-6">
                    <h2>
                        What would you like to do?
                    </h2>
                    <ul class="text-decoration-none">
                        <a href="/fizzBuzz"><li>Play a game.</li></a>
                        <li>Explore projects.</li>
                        <li>Review my resume.</li>
                        <li>Get in contact with me.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
};

export default Home;