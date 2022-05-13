// pages/Cart.js

import React, {Component} from "react";
import PropTypes from "prop-types";

import CartList from "./CartList";
import CartSummary from "./CartSummary";

class Cart extends Component {
    static defaultProps = {
    
    }

    static propTypes = {
    
    }
    constructor(props) {
        super(props);
        // keyword
        // owned and contained by component, component state, data
        this.state = {
            items: [ 
            			{id: 1, name: 'P1', price: 100, qty: 1}
            	   ],
            amount: 0, // sum of all items price * qty
            count: 0, // sum of all items qty
            flag: true
        }
    }
    
    addItem = () => {
        let id = Math.ceil(Math.random() * 10000);
        let item = {
            id,
            name: `Product ${id}`,
            price: Math.ceil(Math.random() * 100),
            qty: 1
        }

        //TODO:
        // immutable array changes
        const items = [...this.state.items, item]
        // msut call setState for setting state, setState is async function
        this.setState({
            items  // items: items
        })
 
    }

    // we shall pass these functiosn as properties to child component, cartitem component
    
    removeItem = (id) => {
        //TODO

        // filter out all the item except the id we want to remove
        const items = this.state.items.filter (item => item.id != id)
        this.setState({
            items
        })
    }

    updateItem = (id, qty) => {
        //TODO
        // immutablity, one is array, one is object that we update qty
        const items = this.state.items.map (item => item.id == id? {...item, qty}: item)
        this.setState({items})
    }

    empty = () => {
        //TODO
         this.setState({items: []})
    }

    //dummy
    refresh = () => {
        this.setState({
            flag: true
        })
    }

    // derived data from state
    recalculate(items) {
        let count = 0, 
            amount = 0;

        for (let item of items) {
            amount += item.price * item.qty;
            count += item.qty;
        }

        this.setState({
            amount,
            count
        })
    }

    // keyword, used to calculate derived state from props and state variable
    // we have items which are updated on add/remove/update/empty funcs
    // we have to calculate total amount and count of items in shopping cart which are derived state
    // is called during mount (first time render) and update cycle (second time render onwards)
    // props from parent component if any
    // state is from current component, state is same this.state  in cart component
    // this function should calculate derived state and return a derived state
    // returned data /state shall be merged with this.state in cart component before callign render function
    static getDerivedStateFromProps(props, state) {
        console.log("Cart getDerivedStateFromProps")
        let count = 0, 
        amount = 0;

        for (let item of state.items) {
            amount += item.price * item.qty;
            count += item.qty;
        }

        // return a new state, which will be merged with this.state
        return {
            amount, count
        }
    }

    //TODO:
    //componentWillMount
    
    
    render() {
        console.log("Cart render")
        return (
            <div> 
            <h2>Cart</h2>

            <button onClick={this.addItem}>
                Add Item
            </button>


            <button onClick={this.empty}>
                Empty
            </button>

            <button onClick={this.refresh}>
                Refresh
            </button>
            

            <CartList  items={this.state.items}  
                       removeItem={this.removeItem}
                       updateItem={this.updateItem}
            />

            <CartSummary amount={this.state.amount}
                         count = {this.state.count}
            />

            </div>
        )
    }
} 




export default Cart;