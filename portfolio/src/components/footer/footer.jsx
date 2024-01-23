import { Link } from 'react-router-dom';
import FooterLayout from './ui/footerLayout';


function Footer() {

    return (
        <>
            <FooterLayout
                links={[
                    <Link key={1} className="list-item text-decoration-none fs-5 text-light" to='/applications'>
                        <div className="col-12 me-5">
                            Applications
                        </div>
                    </Link>,
                    <Link key={2} className="list-item text-decoration-none fs-5 text-light" to='/projects'>
                        <div className="col-12 me-5">
                            Projects
                        </div>
                    </Link>,
                    <Link key={3} className="list-item text-decoration-none fs-5 text-light" to='/'>
                        <div className="col-12 me-5">
                            2024 @ClydeRitchie
                        </div>
                    </Link>,
                    <Link key={4} className="list-item text-decoration-none fs-5 text-light" to='/resumes'>
                        <div className="col-12 me-5">
                            Resume
                        </div>
                    </Link>,
                    <Link key={5} className="list-item text-decoration-none fs-5 text-light" to='/contacts'>
                        <div className="col-12 me-5">
                            Contact
                        </div>
                    </Link>,
                ]}
            />
        </>
    )
};

export default Footer;