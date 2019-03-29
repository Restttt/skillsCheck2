import React, {Component} from 'react';
import axios from 'axios';

import Items from './StoreComponents/Items/Items';
import AddItem from './StoreComponents/addItem/addItem';


import "./Store.css";

class Store extends Component {
    constructor() {
        super();

        this.state = {
            products: []
        };
    };
    
    componentDidMount() {
        axios.get('/api/products').then(res => {
            this.setState({ products: res.data });
        }).catch(err => console.log(`we had an error getting all items ${err}`));
    };

    submitAdd = (product) => {
        axios.post('/api/products', product).then(res => {
            this.setState({ products: res.data});
            alert("Added product!");
        }).catch(err => console.log(`unable to add the product ${err}`));
    };

    submitEdit = (id, price) => {
        axios.put(`/api/product/${id}`, price).then(res => {
            this.setState({ products: res.data });
            alert("edited product!");
        }).catch(err => console.log(`unable to edit the product ${err}`));
    };

    deleteItem = (id) => {
        axios.delete(`/api/product/${id}`).then(res => {
            this.setState({ products: res.data });
            alert("Deleted Product");
        }).catch(err => console.log(`unable to delete the product ${err}`));
    }

    render() {
        return(
            <div>
                <div className="padding"></div>

                <AddItem 
                submitAddFn={this.submitAdd}/>

                <Items 
                submitEditFn={this.submitEdit}
                deleteItemFn={this.deleteItem}
                products={this.state.products}/>

            </div>
        );
    };
};

export default Store;
