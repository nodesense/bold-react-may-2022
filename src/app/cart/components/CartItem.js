// CartItem.js
import React, {PureComponent} from "react";
import PropTypes from "prop-types";

class CartItem extends PureComponent {
    constructor(props) {
        super(props);
    }

    //TODO: Ref
    //TODO: componentWillMount
    //TODO: state from props, qty

    // called aafter first render
    // called on creatiog time
    // calling api, start timer, susbcribe for event
    componentDidMount() {
        console.log("CartItem componentDidMount")
    }

    // called on update cycle
    // after second render 
    // use dom to update chart/scroll position etc
    componentDidUpdate() {
        console.log("CartItem componentDidUpdate")
    }

    // when component to be destroyed
    // stop the timer, stop susbcription, stop api calls etc
    componentWillUnmount() {
        console.log("CartItem componentWillUnmount")
    }
   
    render() {
        // no order for object while destructring
        let {removeItem, updateItem, item} = this.props;

         
        console.log("CartItem Render ", item.id);

        return (
            <tr>
                <td>{item.name} </td>
                <td>{item.price}</td>
                <td>{item.qty}</td>
                <td>{item.price * item.qty}</td>
                <td> 
                <button onClick={() => updateItem(item.id, item.qty + 1) }>
                        +1
                </button>    

                <button onClick={ () => updateItem(item.id, item.qty - 1) }>
                        -1
                </button>    
                <button onClick={ () => removeItem(item.id) }>
                        X
                </button>
                </td>
            </tr>
        )
    }
} 


CartItem.defaultProps = {
    
}

CartItem.propTypes = {
    
}

export default CartItem;