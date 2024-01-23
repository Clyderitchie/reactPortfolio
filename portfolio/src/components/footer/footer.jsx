import { Link } from 'react-router-dom';
import FooterLayout from './ui/footerLayout';


function Footer() {

    return (
        <>
            <FooterLayout
                links={[
                    <Link key={1} className="list-item text-decoration-none fs-5 text-light" to='/applications'>
                        Applications
                    </Link>,
                    <Link key={2} className="list-item text-decoration-none fs-5 text-light" to='/projects'>
                        Projects
                    </Link>,
                    <Link key={3} className="list-item text-decoration-none fs-5 text-light" to='/'>
                        2024 @ClydeRitchie
                    </Link>,
                    <Link key={4} className="list-item text-decoration-none fs-5 text-light" to='/resumes'>
                        Resume
                    </Link>,
                    <Link key={5} className="list-item text-decoration-none fs-5 text-light" to='/contacts'>
                        Contact
                    </Link>,
                ]}
            />
        </>
    )
};

export default Footer;