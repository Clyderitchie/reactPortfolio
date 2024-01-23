import { Link } from 'react-router-dom';
import AppList from '../../components/ui/appPage/appList';
import FizzBuzzImage from '../../components/ui/appPage/img/fizzBuzz.png';
import PasswordGeneratorImage from '../../components/ui/appPage/img/passwordGenerator.png'



function Apps() {
    return (
        <AppList
            links={[
                <Link key={1} className="list-item text-decoration-none fs-3 text-light" to='/fizzBuzz'>
                    <div className="col-6">
                        <div className="card mb-3 bg-dark">
                            <img src={FizzBuzzImage} className="card-img-top" alt="Screenshot of fizzBuzz page" />
                            <div className="card-body">
                                    <h5 className="text-light text-center">FizzBuzz</h5>
                                    <p className="text-light text-center">A new take on a programming classic.</p>
                            </div>
                        </div>
                    </div>
                </Link>,
                <Link key={2} className="list-item text-decoration-none fs-3 text-light" to='/calculator'>
                    <div className="col-6">
                        <div className="card mb-3 bg-dark">
                            <img src={PasswordGeneratorImage} className="card-img-top" alt="Screenshot of password generator page" />
                            <div className="card-body">
                                    <h5 className="text-light text-center">Calculator</h5>
                                    <p className="text-light text-center">Need a help with some numbers? Well don't worry anymore!</p>
                            </div>
                        </div>
                    </div>
                    
                </Link>,
                <Link key={3} className="list-item text-decoration-none fs-3 text-light" to='/password'>
                       <div className="col-6">
                        <div className="card mb-3 bg-dark">
                            <img src={PasswordGeneratorImage} className="card-img-top" alt="Screenshot of password generator page" />
                            <div className="card-body">
                                    <h5 className="text-light text-center">Password Generator</h5>
                                    <p className="text-light text-center">Tired of trying to create your own unique password? Give this a shot then!</p>
                            </div>
                        </div>
                    </div>
                </Link>
            ]}
        />
    )
};

export default Apps;