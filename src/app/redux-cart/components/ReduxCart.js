//redux-cart/components/ReduxCart.js
import React from 'react';

// react code, no redux hardcoded here
// container component shall pass amount, addItem, emptyCart
// as props, which can work with store
const ReduxCart = (props) => {
    console.log("ReduxCart Render", props)
    const {amount, addItem, emptyCart} = props;
    return (
        <div>
            <h2> Redux Cart </h2>
            <p>Amount {amount}</p>
            <button onClick={addItem}>
                Add Item
            </button>
            <button onClick={emptyCart}>
                Empty Cart
            </button>
        </div>
    )
}

export default ReduxCart;