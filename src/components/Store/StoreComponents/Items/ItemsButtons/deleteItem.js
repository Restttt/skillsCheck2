import React, { Component } from 'react';

class DeleteItem extends Component {
    
    componentDidUpdate() {
        setTimeout(() => {
            alert("Wow we updated the state!");
        }, 1050);
    }

    render() {
        return(
            <button className="product-delete" onClick={() => this.props.deleteItemFn(this.props.id)}>Delete</button>
        );
    };
};

export default DeleteItem;