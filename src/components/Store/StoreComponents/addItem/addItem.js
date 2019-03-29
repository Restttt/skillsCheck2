import React, {Component} from 'react';

import './addItem.css';


class AddItem extends Component {
    constructor() {
        super();

        this.state = {
            product_name: '',
            price: 0,
            image_url: '',
        };
    };

    updateText = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    submitNewProduct = () => {
        const product = {
            product_name: this.state.product_name,
            price: this.state.price,
            image_url: this.state.image_url
        }
        this.props.submitAddFn(product);
    }

    render() {
        let input = {
            
        }

        return(
            <div className="product-add-box-main">
                <div className="product-add-box">

                    <figure className="add-image-box">
                        <img className="add-image" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/No_image_3x4.svg/1024px-No_image_3x4.svg.png" alt="Not available" />
                    </figure>

                        <h3 className="add-image-text">Image URL:</h3>
                        <input onChange={this.updateText} className="image-input" name="image_url" placeholder="product image"/>
                        <h3 className="add-name-text">Price:</h3>
                        <input onChange={this.updateText} className="price-input" name="price" placeholder="product price"/>
                        <h3 className="add-price-text">Price Name:</h3> 
                        <input onChange={this.updateText} className="name-input" name="product_name" placeholder="product name"/>
                        <button onClick={() => this.submitNewProduct()}className="add-submit">Submit</button>
                        <button value="reset" className="cancel-submit">Cancel</button>
                </div>
            </div>
        )
    }
};

export default AddItem;