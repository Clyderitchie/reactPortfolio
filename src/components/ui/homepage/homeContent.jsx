import ClydeImage from './img/Clyde.jpeg'

import './homepage.css'

function Home({ links }) {
    return (
        <>
            <div className="container text-light mt-5 mb-5">
                <div className="row">
                    <div id="intro" className="col-12">
                        <h1 id="helloHome" className="fw-bolder">Hello Welcome to my portfolio</h1>
                        <p className="fw-bold fs-5 mt-2 ">
                            Hello, my name is Clyde and I am junior full stack developer who also has experience in programming
                            languages such as Java and Python. On this site there is many things to do and explore, from mini
                            applications to checking out my
                            latest projects that I have done. Please if you like what you see feel free to contact me if you have
                            any questions! Thank you for visiting and enjoy!
                        </p>
                    </div>
                </div>
            </div>
            <div className="container text-light mt-5 d-flex justify-content-around">
                <div className="row">
                    <div id="carouselExampleCaptions" className="carousel slide appScroll">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div className="carousel-inner text-light">
                            {links.map((link) => link)};
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>

                <div className="row">
                    <div className="col-6 p-3">
                        <img src={ClydeImage} alt="This will be a picture of Clyde" />
                    </div>
                </div>
            </div>
        </>
    )
};

export default Home;