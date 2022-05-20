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

const unsubscribeFunc = store.subscribe ( () => {
    // callback, called after every dispatch
    // called whether state is changed or not 
    console.log("**susbcribe called")
    // if we want values, call getState
    const state = store.getState()
    console.log("SUSBCRIBE STATE ", state)
})

let action = cartActions.addItemToCart(1, 'product 1', 100)
console.log("dispatching action", action)

// should call reducers, update the store
// after reducer, calls subscriber
store.dispatch(action)

console.log("DISPATCH DONE")

state = store.getState()

console.log("Start after addItem ", state)

console.log("dispatch update item ")

// set 5 quantities
//store.dispatch(cartActions.updateItemInCart(1, 5))
// bindActionCreators, it wraps action creator with dispatch and create a wrapper function
// if we call wrapper function, it will call action creator and
//        action creator returns action
//        action shall be dispatched automatically
const updateItemInCart = bindActionCreators(cartActions.updateItemInCart,
                                            store.dispatch)
//bindactioncreator function, wrap updateItemInCart and dispatch, automatically dispatch action
updateItemInCart(1, 5) // equal to  store.dispatch(cartActions.updateItemInCart(1, 5))                  


console.log("State after update qty ", store.getState())

console.log("dispatch addItem")
// store.dispatch(cartActions.addItemToCart(2, 'Product 2', 200))
// action will include methods that shal be wrapped with dispatch
const actions = bindActionCreators(cartActions, store.dispatch)
actions.addItemToCart(2, 'Product 2', 200)
console.log("State after add item ", store.getState())


console.log("dispatch remove item")
store.dispatch(cartActions.removeItemFromCart(1))
console.log("State after remove  item ", store.getState())

console.log("dispatch emptyCart")
store.dispatch(cartActions.emptyCart())
console.log("State after emptyCart ", store.getState())

// unsusbcribe from store, so that susbcribe won't be called
unsubscribeFunc() // 
// calls reducers
store.dispatch({type: 'FOOBOO'}) // susbcribe won't be called

//getProActionFunc is action function, not action object
const getProActionFunc = cartActions.getProducts()
console.log("getProActionFunc is ", typeof (getProActionFunc), 
                                        getProActionFunc)

console.log("Dispatching Action Func ", getProActionFunc)
store.dispatch(getProActionFunc)
