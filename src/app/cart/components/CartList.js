// CartList.js

import React, {PureComponent} from "react";
import PropTypes from "prop-types";

import CartItem from "./CartItem";

 //TODO: PureComponent
 // PureCompoennt is build in component part of react
 // it has function shouldComponentUpdate, this function returns true or false
 // if true means render will be called on update cycle
 // if false, render shalll not be called on update ccyel
 // on create cycle, shouldComponentUpdate is not called, we cannot stop render function
 // on update cycle, we can control render function being called


 class CartList extends PureComponent {
    constructor(props) {
        super(props);
    }
     
    //TODO: shouldComponentUpdate
    
    render() {
        console.log("CartList Render");

        let {items, updateItem, removeItem} = this.props;

        return (
            <div> 
            <h2>Cart List</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Qty</th>
                        <th>Total</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {/* TODO props items map with CartItem */ }
                    {
                        items.map(item => (<CartItem item={item} key={item.id} 
                                                     updateItem={updateItem}
                                                     removeItem = {removeItem}
                            
                            />))
                    }
                </tbody>
            </table>
            </div>
        )
    }
} 

CartList.defaultProps = {
    
}

CartList.propTypes = {
    
}

export default CartList;