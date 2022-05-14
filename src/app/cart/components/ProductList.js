// ProductList.js
import axios from 'axios';
import React, { Component, useState, useEffect } from 'react';
// npm install axios 
const API = 'http://localhost:7070/delayed/api/products'

// useEffect is useful in accessing DOM elements
// useEffect useful for componentDidMount like implementation lifecycle
// useEffect useful for componentDidUpdate like implementation lifecycle
// useEffect useful for componentwillUnmount like implementation lifecycle

//TODO: cancel axios pending calls if user visit another page/like componentwillUnmount

const  ProductList = (props)  => {
        console.log("ProductList render ")
        const [loading, setLoading] = useState(false)
        const [products, setProducts] = useState([])
        const [count, setCount] = useState(0) // useEffect understanding purpose

        //similar to componentDidMount and componentDidUpdate
        // called on creation and update cycle
        // called after function comp render
        useEffect( () => {
            console.log("useEffect 1 called")
        })

        // 2nd argument to useEffect is list of dependent variabels
        // to call useEffect hoook on value changes
        // using [] empty array means, useEffect called only creation cycle, not on update cycle
        // //similar to   componentDidMount
        useEffect(async () => {
            console.log("useEffect 2 called")
            console.log("getting products from server")
            setLoading(true)

            const resp = await axios.get(API)
            console.log("got product from server", resp.data)
            setLoading(false)
            setProducts(resp.data)

        }, [])

        if (loading) {
            return (
                <>
                <h2>Product List</h2>
                <p>Data is loading.......</p>
                </>
            )
        }

        return ( 
            <div>
                <h2>Product List</h2>
                 <button onClick={() => setCount (count + 1)}>+1</button>
                <table>
                    <thead>
                    <tr>
                    <th>Name</th>
                    <th>Price</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                             products.map (product => (
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
 
 
export default ProductList;