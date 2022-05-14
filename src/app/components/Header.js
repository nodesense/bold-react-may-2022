// functional component
import React from 'react';
import LangContext from '../contexts/LangContext';
import ThemeContext from '../contexts/ThemeContext';


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
                     <button > {lang.home}</button>   
                     <button > {lang.products}</button>  
                     <button > {lang.cart}</button>  
                     <button > {lang.login}</button>  
                    </>
                )
              }
            </LangContext.Consumer>

            <hr />
        </div>
    )
}

export default Header;