import { Link } from 'react-router-dom';
import HomeContent from '../components/ui/homepage/homeContent';


function Home() {
    return (
   
        <HomeContent
            links={[
                <Link key={1} className="list-item text-decoration-none fs-3 text-light" to='/applications'><button type="button">Explore some mini applications</button></Link>,
                <Link key={2} className="list-item text-decoration-none fs-3 text-light" to='/projects'>Explore some projects.</Link>,
                <Link key={3} className="list-item text-decoration-none fs-3 text-light" to='/resumes'>View my resume.</Link>,
                <Link key={4} className="list-item text-decoration-none fs-3 text-light" to='/contacts'>Get in touch with me. </Link>,
            ]}

        />
        
    )
};

export default Home;