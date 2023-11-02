import './Homepage.scss'
import { Link } from 'react-router-dom';

const Homepage = () => {
    return (
        <main>
            <section>
                <h2>Little Lemon</h2>
                <h3>Chicago</h3>
                <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                <Link to="/bookingpage"><button aria-label='On Click'>Reserve a Table</button></Link>
                <div>
                    <img src={require('../img/restauranfood.jpg')} alt="Waiter with food"/>
                </div>
            </section>
        </main>
    )
}

export default Homepage