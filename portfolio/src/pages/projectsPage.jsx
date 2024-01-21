function Projects() {
    return (
        <>
            <h1 className="text-light">Projects</h1>

            <div className="container mt-5">
                <div className="row">
                    <div className="col-12">
                        {/* Carousel starts here */}
                        <div id="carouselExampleCaptions" className="carousel slide">
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            </div>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src="..." className="d-block w-100" alt="..." />
                                        <div className="carousel-caption d-none d-md-block">
                                            <h5 className="text-light">First slide label</h5>
                                            <p className="text-light">Some representative placeholder content for the first slide.</p>
                                        </div>
                                </div>
                                <div className="carousel-item">
                                    <img src="..." class="d-block w-100" alt="..." />
                                        <div className="carousel-caption d-none d-md-block">
                                            <h5 className="text-light">Second slide label</h5>
                                            <p className="text-light">Some representative placeholder content for the second slide.</p>
                                        </div>
                                </div>
                                <div className="carousel-item">
                                    <img src="..." class="d-block w-100" alt="..." />
                                        <div className="carousel-caption d-none d-md-block">
                                            <h5 className="text-light">Third slide label</h5>
                                            <p className="text-light">Some representative placeholder content for the third slide.</p>
                                        </div>
                                </div>
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
                </div>
            </div>
        </>
    )
};

export default Projects;