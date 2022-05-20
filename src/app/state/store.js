//app/state/store.js
import {createStore, applyMiddleware, combineReducers}  from 'redux';
import thunk from 'redux-thunk';

import {cartReducer}  from '../redux-cart/state/reducers/cart.reducers';
import { productReducer } from '../redux-cart/state/reducers/product.reducers';
import { loggerMiddleware } from './middlewares/logger.middleware';
 
const rootReducer = combineReducers({
    // state name : reducer func
    cart: cartReducer,
    productState: productReducer
})

// calls reducers to intiailize state in store
const store = createStore(rootReducer, 
                                applyMiddleware(loggerMiddleware, thunk))

export default store;