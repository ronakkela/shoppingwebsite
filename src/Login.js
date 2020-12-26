import React from 'react';
import './styles/Signinstyle.css';
import { Link } from 'react-router-dom';
// import Signup from './Signup';



class Login extends React.Component {
    render() {
        return (
            <main className="d-flex align-items-center min-vh-100 py-3 py-md-0">
                <div className="container">
                    <div className="card login-card">
                        <div className="row no-gutters">
                            <div className="col-md-5">
                                <img src="https://img.freepik.com/free-photo/product-package-boxes-shopping-bag-cart-with-laptop-online-shopping-delivery-concept_38716-138.jpg?size=626&ext=jpg" alt="login" className="login-card-img" />
                            </div>
                            <div className="col-md-7">
                                <div className="card-body">
                                    <div className="brand-wrapper">
                                        <img src="assets/images/logo.svg" alt="logo" className="logo" />
                                    </div>
                                    <p className="login-card-description">Sign into your account</p>
                                    <form action="#!">
                                        <div className="form-group">
                                            <label for="email" className="sr-only">Email</label>
                                            <input type="email" name="email" id="email" className="form-control" placeholder="Email address" />
                                        </div>
                                        <div className="form-group mb-4">
                                            <label for="password" className="sr-only">Password</label>
                                            <input type="password" name="password" id="password" className="form-control" placeholder="password" />
                                        </div>
                                        <input name="login" id="login" className="btn btn-block login-btn mb-4" type="button" value="Login" />
                                    </form>
                                    <a href="#!" className="forgot-password-link">Forgot password?</a>

                                    <p className="login-card-footer-text">Don't have an account? <Link to="/Signup" className="text-reset">Register here</Link></p>


                                    <nav className="login-card-footer-nav">
                                        <a href="#!">Terms of use.</a>
                                        <a href="#!">Privacy policy</a>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        )
    }
}

export default Login;