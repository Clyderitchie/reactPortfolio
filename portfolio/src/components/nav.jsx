import { Link } from 'react-router-dom';
import Navbar from './ui/navbar';

function Nav() {

    return (
        <Navbar
            links={[
                <Link key={1} className="dropdown-item text-light" to='/'>
                    Home
                </Link>,
                <Link key={2} className="dropdown-item text-light" to='/games'>
                    Games
                </Link>,
                <Link key={3} className="dropdown-item text-light" to='/projects'>
                    Projects
                </Link>,
                <Link key={4} className="dropdown-item text-light" to='/resumes'>
                    Resume
                </Link>,
                <Link key={5} className="dropdown-item text-light" to='/contacts'>
                    Contact
                </Link>,
            ]}
        />
    );
}

export default Nav;