import '../footer.css'


function FooterLayout({ links }) {

    return (
        <>
            <footer id="footer" className="text-center text-light position-fixed-bottom">
                <div className="row d-inline-block">
                        {links.map((link) => link)}
                </div>
            </footer>
        </>
    )
};

export default FooterLayout;