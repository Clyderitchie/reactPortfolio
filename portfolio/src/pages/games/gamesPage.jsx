import { Link } from 'react-router-dom';
import GameList from '../../components/ui/gameList';



function Games() {
    return (
        <GameList
            links={[
                <Link key={1} className="list-item text-decoration-none fs-3 text-light" to='/fizzBuzz'>
                    FizzBuzz
                </Link>,
                <Link key={2} className="list-item text-decoration-none fs-3 text-light" to='/calculator'>
                    Calculator
                </Link>
            ]}
        />
    )
};

export default Games;