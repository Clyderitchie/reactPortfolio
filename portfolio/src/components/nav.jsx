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


{/* <div id="navBar" className="container bg-dark">
<nav className="navbar navbar-expand-lg bg-dark">
    <div className="container-fluid">
        <h1 className="bolder">
            <a className="text-decoration-none text-light" href="#">
                Clyde Ritchie
            </a>
        </h1>
        <div id="navDropdown" className="btn-group" role="group">
            <button type="button" className="btn bg-dark btn-light dropdown-toggle text-light" data-bs-toggle="dropdown"
                aria-expanded="false">
                Explore
            </button>
            <ul className="dropdown-menu bg-dark">
                <li><a className="dropdown-item text-light" href="#">Games</a></li>
                <li><a className="dropdown-item text-light" href="#">Projects</a></li>
                <li><a className="dropdown-item text-light" href="#">Contact</a></li>
                <li><a className="dropdown-item text-light" href="#">Resume</a></li>
                <li><a className="dropdown-item text-light" href="#">Admin</a></li>
            </ul>
        </div>
    </div>
</nav>
</div> */}