import { Link, useLocation } from "react-router-dom";
import { ReactComponent as Logo } from '../img/Logo.svg';
import './Navigation.scss';

const Navigation = () => {

    const location = useLocation();

    return (
        <nav className="nav">
            <Logo />
            {(location.pathname !== "/") ? 
                <div className="nav_option">
                    <Link to={`/`}>
                        <span className="nav_option_text">Home</span>
                    </Link>
                </div>
                :
                <div className="nav_option-selected">
                    <span className="nav_option_text">Home</span>
                </div>
                }
            {(location.pathname !== "/about") ? 
                <div className="nav_option">
                    <Link to={`/about`}>
                        <span className="nav_option_text">About</span>
                    </Link>
                </div> : 
                <div className="nav_option-selected">
                    <span className="nav_option_text">About</span>
                </div>}
            {(location.pathname !== "/menu") ? 
                <div className="nav_option">
                    <Link to={`/menu`}>
                        <span className="nav_option_text">Menu</span>
                    </Link>
                </div> : 
                <div className="nav_option-selected">
                    <span className="nav_option_text">Menu</span>
                </div>}
            {(location.pathname !== "/bookingpage") ? 
                <div className="nav_option">
                    <Link to={`/bookingpage`}>
                        <span className="nav_option_text">Reservations</span>
                    </Link>
                </div> : 
                <div className="nav_option-selected">
                    <span className="nav_option_text">Reservations</span>
                </div>}
            {(location.pathname !== "/orderonline") ? 
                <div className="nav_option">
                    <Link to={`/orderonline`}>
                        <span className="nav_option_text">Order Online</span>
                    </Link>
                </div> : 
                <div className="nav_option-selected">
                    <span className="nav_option_text">Order Online</span>
                </div>}
            {(location.pathname !== "/login") ? 
                <div className="nav_option">
                    <Link to={`/login`}>
                        <span className="nav_option_text">Login</span>
                    </Link>
                </div> : 
                <div className="nav_option-selected">
                    <span className="nav_option_text">Login</span>
                </div>}
                
                


        </nav>
    )
}

export default Navigation