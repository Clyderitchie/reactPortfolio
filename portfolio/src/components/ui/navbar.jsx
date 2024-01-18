function Nav({ links }) {
    return (
        <>
            <header class="bg-dark border border-bottom">
                <div id="navBar" class="container bg-dark">
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
                                    {links.map((link) => link)};
                                    {/* <li><a class="dropdown-item text-light" href="#">Games</a></li>
                                <li><a class="dropdown-item text-light" href="#">Projects</a></li>
                                <li><a class="dropdown-item text-light" href="#">Contact</a></li>
                                <li><a class="dropdown-item text-light" href="#">Resume</a></li>
                                <li><a class="dropdown-item text-light" href="#">Admin</a></li> */}
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
        </>

    )
};

export default Nav;