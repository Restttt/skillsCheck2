import React, {Component} from 'react';


class EditItem extends Component {
    constructor() {
        super();

        this.state = {
            price: 0,
            edit: false
        };
        this.changeEdit = this.changeEdit.bind(this);
    };

    updateText = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    changeEdit() {
        if (this.state.edit === false) {
            this.setState({ edit: true })
        } else {
            this.setState({ edit: false })
        };
    };

    submitEdit = () => {
        let price = {
            price: this.state.price
        };
        this.props.submitEditFn(this.props.id, price);
    }

    render() {
        return this.state.edit ? (
            <div className="edit-fields-active">
                <button onClick={this.changeEdit}>Edit Price</button>
                <h3 className="add-price-text">Price:</h3> 
                <input onChange={this.updateText} className="price-input" name="price" placeholder="product price" type="number"/>
                <button onClick={() => this.submitEdit()}className="add-submit">Save Changes</button>
            </div>
        ) : (
            <div className="edit-fields">
                <button onClick={this.changeEdit}>Edit Price</button>
            </div>
        );
    }
};

export default EditItem;