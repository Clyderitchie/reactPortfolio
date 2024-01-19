function GameList({ links }) {
    return (
        <>
            <div className="container text-light mt-5">
                <div className="row">
                    <div className="col-12 d-flex justify-content-center">
                        <h2 className="fw-bolder">
                            So you wanna play some games?
                        </h2>
                    </div>
                    <div className=" mt-1 col-12 d-flex justify-content-center">
                    <h3 className="fw-bolder">
                            Let's play then!
                        </h3>
                    </div>
                    <div className=" mt-4 ">
                        <ul className="bg-dark d-flex flex-column p-3">
                            {links.map((link) => link)}
                        </ul>
                    </div>
                </div>
            </div>

        </>
    )
};

export default GameList;