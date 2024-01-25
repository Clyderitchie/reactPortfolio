import FizzBuzzImage from './img/fizzBuzz.png';
import PasswordGenerator from './img/passwordGenerator.png'

function AppList({ links }) {
    return (
        <>
            <div className="container text-light mt-5">
                <div className="row">
                    <div className="col-12 d-flex justify-content-center">
                        <h2 className="fw-bolder">
                           Check out some of the mini applications and projects that I have made.
                        </h2>
                    </div>
                    <div className=" mt-4 ">
                        <ul className="bg-dark d-flex flex-column p-3 mt-4">
                            {links.map((link) => link)}
                        </ul>
                    </div>
                </div>
            </div>

        </>
    )
};

export default AppList;