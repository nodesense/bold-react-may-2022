// working with input controls
// formik
// working with ref
import React from 'react';


class Checkout extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            name: '',
            city: ''
        }
    }

    render() {
        return (
            <div>
                <form>
                    Name <input name="name" type="text" />
                    City <select name="city">
                        <option value="CH">Chennai</option>
                        <option value="BLR">Bengaluru</option>
                        <option value="MY">Mysore</option>
                    </select>
                </form>
            </div>
        )
    }
}

export default Checkout;