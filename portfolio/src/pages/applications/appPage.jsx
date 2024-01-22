import { Link } from 'react-router-dom';
import AppList from '../../components/ui/appList';



function Apps() {
    return (
        <AppList
            links={[
                <Link key={1} className="list-item text-decoration-none fs-3 text-light" to='/fizzBuzz'>
                    FizzBuzz
                </Link>,
                <Link key={2} className="list-item text-decoration-none fs-3 text-light" to='/calculator'>
                    Calculator
                </Link>,
                <Link key={3} className="list-item text-decoration-none fs-3 text-light" to='/password'>
                    Password Generator
                </Link>
            ]}
        />
    )
};

export default Apps;