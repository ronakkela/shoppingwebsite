import React from 'react';
import Navbar from "./Navbar";
import './styles/Navbarstyle.css';

class Contact extends React.Component {
    render() {
        return (
            <div>
                <Navbar />
                <ol>
                    <h1> <a href="https://www.facebook.com/Ronakkela">https://www.facebook.com/Ronakkela</a></h1>
                    <h1> <a href="www.instagram.com/ronakkela">www.instagram.com/ronakkela</a></h1>
                    <h1> <a href="https://www.linkedin.com/in/ronakkela">https://www.linkedin.com/in/ronakkela</a></h1>
                    <h1> <a href="https://twitter.com/RonakKela">https://twitter.com/RonakKela</a></h1>
                    <h1> <a href="https://github.com/ronakkela">https://github.com/ronakkela</a></h1>
                </ol>
            </div>
        )
    }
}

export default Contact;
