// Footer.js
import React from 'react';
import PropTypes from 'prop-types';

// props are title, year, branches [array], weekend (bool)
// children is keyword
// destructuring at parameter
const Footer = ({title, year, branches, weekend, children}) => {
    console.log("Footer render")
    return (
        <div>
            <hr />
            <p>Copyrights {year}, {title} </p>
            {/* in JSX, we can use expression, not statement */}
            { branches.map (branch => <span key={branch}>{branch} </span>) }

            {
                weekend? <p>Weekend open </p> :
                         <p>Weekend closed</p>
            }

            {children}
        </div>
    )
} 

//keyword, static  defaultProps, used when parent doesn't pass values for props
Footer.defaultProps = {
    branches: [],
    title: 'My App'
}

//type checking, whether props passed in right type or not
// check whetehr props is required or not
// keyword
Footer.propTypes = {
    title: PropTypes.string, // optional
    branches: PropTypes.array, // optional
    year: PropTypes.number.isRequired, // mandatory,
    weekend: PropTypes.bool.isRequired, // mandatory
}

export default Footer;