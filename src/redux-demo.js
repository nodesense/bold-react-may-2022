// src/redux-demo.js
import store from "./app/state/store"
import * as cartActions 
            from "./app/redux-cart/state/actions/cart.actions" ;
import {bindActionCreators} from 'redux';

console.log("redux demo")

// get last known state from store

// returns initial state { cart: {amount: 0, totalItems: 0, items: []}}
// getState is redux store function
let state = store.getState()

console.log("Initial state ", state)

let action = cartActions.addItemToCart(1, 'product 1', 100)
console.log("dispatching action", action)

// should call reducers, update the store
store.dispatch(action)

state = store.getState()

console.log("Start after addItem ", state)

console.log("dispatch update item ")

// set 5 quantities
store.dispatch(cartActions.updateItemInCart(1, 5))

console.log("State after update qty ", store.getState())

console.log("dispatch addItem")
store.dispatch(cartActions.addItemToCart(2, 'Product 2', 200))
console.log("State after add item ", store.getState())


console.log("dispatch remove item")
store.dispatch(cartActions.removeItemFromCart(1))
console.log("State after remove  item ", store.getState())


console.log("dispatch emptyCart")
store.dispatch(cartActions.emptyCart())
console.log("State after emptyCart ", store.getState())

// calls reducers
store.dispatch({type: 'FOOBOO'})