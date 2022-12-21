import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
    <div>
        <Link className='' to='/'>
            Home
        </Link>
        <Link className='' to='weather'>
            Weather
        </Link>
    </div>
    )
}

export default Navbar;