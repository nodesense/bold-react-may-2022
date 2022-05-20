//app/state/store.js
import {createStore, applyMiddleware, combineReducers}  from 'redux';

import {cartReducer}  from '../redux-cart/state/reducers/cart.reducers';

const rootReducer = combineReducers({
    // state name : reducer func
    cart: cartReducer
})

// calls reducers to intiailize state in store
const store = createStore(rootReducer)

export default store;