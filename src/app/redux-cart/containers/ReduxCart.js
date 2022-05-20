// container is a bridge between react and redux
// redux-cart/containers/ReduxCart.js

import {connect} from 'react-redux';
import ReduxCart from '../components/ReduxCart';
import * as cartActions from '../state/actions/cart.actions';

// containers won't know what data needed from redux
// mapStateToProps: read from redux state, pass to component as props

// state = store.getState()
// this function is called by container 
//    first time - initialization
//     after every dispatch, susbcribe
export const mapStateToProps = (state) => {
    return {
        //propName: value from state
        amount: state.cart.amount
    }
}

// container will not dispatch itself
// mapDispatchToProps
// container calls this method
// only one, when component get initialized
// should return props which can dispatch to containers
export const mapDispatchToProps = (dispatch, getState) => {
    return {
        // propname: function
        addItem : () => {
            const id = Math.ceil (Math.random() * 1000000)
            const item = {
                id, // id: id,
                name: `Product ${id}`,
                price: Math.ceil(Math.random() * 100),
                qty: Math.ceil(Math.random() * 10),
            }
            console.log("Dispatching addItem")

            const action = cartActions.addItemToCart(item.id, item.name, item.price)
            dispatch(action)
        },

        emptyCart: () => {
            console.log("Dispatching emptyCart")
            dispatch(cartActions.emptyCart())
        }
    }
}

// connect mapDispatchToProps, mapStateToProps, ReduxCart component, 
// then store together to create a container component
// where is store? Store shall be passed as context to container
// component by Provider at index.js
// container component is pure component by default
// if no changes in props, it won't call render function
// container will susbcribe, unsubscribe automatically

const ReduxCartContainer = connect (mapStateToProps, mapDispatchToProps) (ReduxCart)

export default ReduxCartContainer;