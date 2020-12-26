import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Navbarstyle.css';




class Navbar extends React.Component {
    render() {
        return (
            <div>
                <div class="topnav">
                    <Link class="active" to="/">Products</Link>
                    <Link class="" to="/cart">Cart</Link>
                    <Link class="" to="/about">About</Link>
                    <Link class="" to="/contact">Contact</Link>
                  
                    <div class="login-container">

                        <button><Link to="/login">Login</Link></button>

                    </div>
                </div>
            </div>
        )
    }
}

export default Navbar;
