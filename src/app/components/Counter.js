//Counter.js

import React, {useState, useEffect} from 'react';

// React 16.8 onwards, we have react hooks, which helps to implement few features in functional 
// components
// in func, we can use state , using useState, useReducer
// we can use life eycle events using effects
// we can use ref, using useref..

const Counter = (props) => {
    console.log("Counter render")
    // 0 is default value given for state
    // useState returns array, first element is current state
    // second element is setter function for state
    const [count, setCount] = useState(0)

    //FIXME: state inside useEffect
    // componentdid mount like called once
    useEffect ( () => {
        console.log("Starting timer")
        const handle = setInterval(() => {
            console.log("Timer called ", count)
            setCount(count + 1) // FIXME
        }, 5000)

        return () => {
            console.log("effect unmount clear inverval ", handle)
            clearInterval(handle)
        }
    }, []) //count//FIXME

    return (
        <div>
            <h2>Counter</h2>
            <p>Counter is {count}</p>
            <button onClick={() => setCount (count + 1)}>+1</button>
            <button onClick={() => {
                if (count > 0) 
                    setCount (count - 1)}
            }
                >-1</button>
            <button onClick={() => setCount (0)}>Reset</button>
        </div>
    )
}

export default Counter;