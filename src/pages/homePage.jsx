import { Link } from 'react-router-dom';
import HomeContent from '../components/ui/homepage/homeContent';

import FizzBuzz from './components/ui/appPage/img/fizzBuzz.png';
import Projects from './components/ui/homepage/img/projectPage.png';
import Resume from './components/ui/homepage/img/resumePlaceHolder.png';
import Contact from './components/ui/homepage/img/contactPage.png';

import'./components/ui/homepage/homepage.css';


function Home() {
    return (

        <HomeContent
            links={[
                <Link key={1} className="carousel-item active" to='/applications'>
                    
                        <img src={FizzBuzz} className="d-block w-100 homeImg" alt="FizzBuzz screenshot" />
                        <div className="carousel-caption d-none d-md-block carText">
                            <h5 className="text-light">Applications</h5>
                            <p className="text-light">Explore some mini applications.</p>
                        </div>
                   
                </Link>,
                <Link key={2} className="carousel-item " to='/projects'>
                    
                        <img src={Projects} className="d-block w-100 homeImg" alt="Screenshot of projects page" />
                        <div className="carousel-caption d-none d-md-block bg-dark carText">
                            <h5 className="text-light">Explore some projects.</h5>
                            <p className="text-light">Take a look at some of my bigger scale full stack applications.</p>
                        </div>
                   
                </Link>,
                <Link key={3} className="carousel-item active" to='/resumes'>
                   
                        <img src={Resume} className="d-block w-100 homeImg" alt="Screenshot of resume page" />
                        <div id="imgResume" className="carousel-caption d-none d-md-block carText">
                            <h5 className="text-light"> View my resume.</h5>
                            <p className="text-light">Want to get to know my background better? Take a look then!</p>
                        </div>
                   
                </Link>,
                // <Link key={4} to='/contacts'>
                //     <div className="carousel-item active">
                //         <img src={Contact} className="d-block w-100" alt="Contact page" />
                //         <div className="carousel-caption d-none d-md-block">
                //             <h5 className="text-light">Get in touch with me.</h5>
                //             <p className="text-light">Have further questions? Want to get in touch? Use this page to contact me directly.</p>
                //         </div>
                //     </div>
                // </Link>,
            ]}

        />

    )
};

export default Home;