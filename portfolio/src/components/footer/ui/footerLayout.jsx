import '../footer.css'


function FooterLayout({ links }) {

    return (
        <>
            <footer id="footer" className="d-block text-light bg-dark">
                <div className="row">
                    <div className="col-12 d-flex justify-content-around">
                        {links.map((link) => link)}
                    </div>
                </div>
            </footer>
        </>
    )
};

export default FooterLayout;