function Home({ links }) {
    return (
        <>
            <div className="container text-light mt-5">
                <div className="row">
                    <div id="intro" className="col-12">
                        <h1 id="helloHome" className="fw-bolder">Hello Welcome to my portfolio</h1>
                        <p className="fw-bold fs-5 mt-2 ">
                            Hello, my name is Clyde and I am junior full stack developer who also has experience in programming
                            languages such as Java and Python. On this site there is many things to do and explore, from playing
                            games to checking out my
                            latest projects that I have done. Please if you like what you see feel free to contact me if you have
                            any questions! Thank you for visiting and enjoy!
                        </p>
                    </div>
                </div>
            </div>
            <div className="container text-light mt-5">
                <div className="row mt-2">
                    <div id="explore" className="col-12">
                        <h2>
                            What would you like to do?
                        </h2>
                        <ul className="d-flex flex-column">
                            {links.map((link) => link)}
                        </ul>
                    </div>
                </div>
            </div>

        </>
    )
};

export default Home;