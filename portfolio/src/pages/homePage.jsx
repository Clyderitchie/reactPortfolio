function Home() {
    return (
        <div className="container text-light">
            <div className="row">
                <div id="intro" className="col-6">
                    <h1 id="helloHome" className="fw-bolder">Hello Welcome to my portfolio</h1>
                    <p className="fw-bold fs-5 mt-2 ">
                        Hello, my name is Clyde and I am junior full stack developer who also has experience in programming
                        languages such as Java and Python. On this site there is many things to do and explore, from playing
                        games to checking out my
                        latest projects that I have done. Please if you like what you see feel free to contact me if you have
                        any questions! Thank you for visiting and enjoy!
                    </p>
                </div>
                <div id="explore" className="col-6">
                    <h2>
                        What would you like to do?
                    </h2>
                    <ul className="text-decoration-none">
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