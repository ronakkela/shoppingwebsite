import React from 'react';
import { connect } from 'react-redux'
import './styles/Productsstyle.css';
import Navbar from "./Navbar";
import './styles/Navbarstyle.css';

import { addToCart } from './store/actions/cartActions'

const mapStateToProps = (store) => {
    return {}
}

const mapDispatchToProps = { addToCart }

class Products extends React.Component {
    constructor() {
        super();
        this.state = {
            shop: []
        }
    }

    handleAddToCart = (id, e) => {
        e.preventDefault();
        const item = this.state.shop.find(v => v.id === id)
        this.props.addToCart(item)
    }

    printStudent = (stud) => {

        return (

            <div class="col-sm-12 col-md-12 col-lg-12">
                <div class="jumbotron">
                    <div className="row">
                        <div class="col-sm-6">
                            <h5 className="title">{stud.title}</h5>
                            <p className="description">{stud.description}</p>
                        </div>

                        <div className="col-sm-6">
                            <img alt="cloth" className="image" src={stud.image} /></div>
                    </div>
                    <button type="submit" onClick={this.handleAddToCart.bind(this, stud.id)}>Add to Cart</button>
                </div>

            </div>

        )
    }

    converToJson = (response) => {
        return response.json();
    }

    printResponse = (data) => {
        this.setState({
            shop: data
        })
    }
    componentWillMount() {
        fetch('https://fakestoreapi.com/products')
            .then(this.converToJson)
            .then(this.printResponse);
    }
    render() {

        return (<div>

            <Navbar />

            <div className="center">

                <h1><b>Product Catalogue</b></h1>
                <br />
                {this.state.shop.map(this.printStudent)}
            </div>
        </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);