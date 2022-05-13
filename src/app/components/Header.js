// functional component
import React from 'react';


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
            <hr />
        </div>
    )
}

export default Header;