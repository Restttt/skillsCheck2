import React, {Component} from 'react';
import EditItem from './ItemsButtons/editItem';
import DeleteItem from './ItemsButtons/deleteItem';

import "./Items.css";

class Items extends Component {
    constructor() {
        super();

        this.state = {
            loaded: false
        }
    };

    componentDidMount() {
        setTimeout(() => {
            this.setState({ loaded: true });
        }, 500);
    };

    render() {
        return this.state.loaded ? (this.props.products.map(item => {
            return(
                <div className="product-box" key={item.product_id}>

                    <figure className="product-image-box">
                        <img className="product-image" src={item.image_url} alt="product"/>
                    </figure>

                    <ul className="product-info">
                        <li className="product-name">{item.product_name}</li>
                        <li className="product-price">$ {item.price}</li>
                    </ul>

                    <EditItem 
                    submitEditFn={this.props.submitEditFn}
                    id={item.product_id}/>

                    <DeleteItem 
                    deleteItemFn={this.props.deleteItemFn}
                    id={item.product_id}/>


                </div>
            )
        })) : (
            <div className="item-loading-page-box">

                <div className="loading-page">
                    <h1>Loading inventory...</h1>
                </div>

            </div>
        );
    };
};

export default Items;