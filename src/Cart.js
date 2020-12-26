import React from 'react';
import { connect } from 'react-redux'
import Navbar from "./Navbar";
import './styles/Navbarstyle.css';

const mapStateToProps = (store) => {
    const cart = store.cart
    return { cart }
}

const mapDispatchToProps = {}

class Cart extends React.Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <Navbar />
                {
                    this.props.cart.items.map(item =>

                        <div key={item.id}>
                            <h5 className="title">{item.title}</h5>
                            <br />
                            <p className="description">{item.description}</p>

                            <br />

                            <div className="col-sm-6">
                                <img alt="cloth" className="image" src={item.image} />
                            </div>
                        </div>)

                }
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);