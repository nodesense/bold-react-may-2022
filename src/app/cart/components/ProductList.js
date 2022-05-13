import React, { Component } from 'react';

class ProductList extends Component {
    constructor(props) {
        super(props);
        this.state = { products: [], loading: false }
    }

    
    render() { 
        return ( 
            <div>
                <table>
                    <thead>
                    <tr>
                    <th>Name</th>
                    <th>Price</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.products.map (product => (
                                <tr>
                                    <td>{product.name}</td>
                                    <td>{product.price}</td>
                                </tr>
                            ))
                        }

                    </tbody>
                </table>
            </div>
         );
    }
}
 
export default ProductList;