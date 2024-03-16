import { Link } from 'react-router-dom';
import './css/Header.css';

function Header() {
    return (
        <>
            <header className="header">
                <img class="image" src="/images/11.png"></img>
                <h2>The Whistlers</h2>
            </header>
            <nav className="navbar">
                <ul>
                    <li><Link to="/"><b>Home</b></Link></li>
                    <li><Link to="/products"><b>Products</b></Link></li>
                    <li><Link to="/login"><b>Login</b></Link></li>
                </ul>

            </nav>
        </>
    );

}

export default Header;