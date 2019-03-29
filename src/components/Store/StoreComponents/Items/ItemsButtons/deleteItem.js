import React, { Component } from 'react';

class DeleteItem extends Component {
    render() {
        return(
            <button className="product-delete" onClick={() => this.props.deleteItemFn(this.props.id)}>Delete</button>
        );
    };
};

export default DeleteItem;