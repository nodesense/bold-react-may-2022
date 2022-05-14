// functional component
import React from 'react';
import LangContext from '../contexts/LangContext';
import ThemeContext from '../contexts/ThemeContext';

import {Link, NavLink} from 'react-router-dom';

// this function is a component,
// create and return v.doms
// props / properties useful to pass data from parent component to immediate child component
// passed like object, jsx, mentioend like html attributes
// props are read only, parent manage the props data, child only to use it, not to mutate it
const Header = (props) => {
    console.log("Header render", props);
    // title is from parent, destructure , es6 feature
    const {title} = props // const title = props.title
    return (
        <div>
            <h2>{title}</h2>
            <ThemeContext.Consumer>
                {
                    value => <p style = { {background: value} }> Shopping Cart </p>
                }
            </ThemeContext.Consumer>

            <LangContext.Consumer>
              {  lang => (
                    <>
                     <NavLink className="button" to="/"  > {lang.home}</NavLink>   
                     <NavLink  className="button" to="/products"  > {lang.products}</NavLink>  
                     <NavLink  className="button" to="/cart"  > {lang.cart}</NavLink>  
                     <NavLink  className="button" to="/redux-cart"  >  Redux Cart </NavLink>  
                     <NavLink  className="button" to="/checkout"  > Checkout </NavLink>  
                     <NavLink  className="button" to="/counter"  >  Counter </NavLink>  
                     <NavLink  className="button" to="/checkout-old"  > Checkout Redir </NavLink>  
                     
                     <Link  className="button" to="/login" > {lang.login}</Link>  
                    </>
                )
              }
            </LangContext.Consumer>

            <hr />
        </div>
    )
}

export default Header;