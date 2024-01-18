import { Link } from 'react-router-dom';
import Navbar from './ui/navbar';

function Nav() {

    return (
        <Navbar
            links={[
                <Link key={1} class="dropdown-item text-light" to='/'>
                    Home
                </Link>,
                <Link key={2} class="dropdown-item text-light" to='/games'>
                    Games
                </Link>,
                <Link key={3} class="dropdown-item text-light" to='/projects'>
                    Projects
                </Link>,
                <Link key={4} class="dropdown-item text-light" to='/resumes'>
                    Resume
                </Link>,
                <Link key={5} class="dropdown-item text-light" to='/contacts'>
                    Contact
                </Link>,
            ]}
        />
    );
}

export default Nav;


{/* <div id="navBar" class="container bg-dark">
<nav class="navbar navbar-expand-lg bg-dark">
    <div class="container-fluid">
        <h1 class="bolder">
            <a class="text-decoration-none text-light" href="#">
                Clyde Ritchie
            </a>
        </h1>
        <div id="navDropdown" class="btn-group" role="group">
            <button type="button" class="btn bg-dark btn-light dropdown-toggle text-light" data-bs-toggle="dropdown"
                aria-expanded="false">
                Explore
            </button>
            <ul class="dropdown-menu bg-dark">
                <li><a class="dropdown-item text-light" href="#">Games</a></li>
                <li><a class="dropdown-item text-light" href="#">Projects</a></li>
                <li><a class="dropdown-item text-light" href="#">Contact</a></li>
                <li><a class="dropdown-item text-light" href="#">Resume</a></li>
                <li><a class="dropdown-item text-light" href="#">Admin</a></li>
            </ul>
        </div>
    </div>
</nav>
</div> */}