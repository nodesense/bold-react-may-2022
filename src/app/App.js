import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';


class App extends React.Component {
    // called 1st
    constructor(props) {
        super(props)
        console.log("App comp created")
    }

    // called after first mount
    // called after first render,after v.dom placed in real dom first time
    // Creation cycle
    // keyword
    componentDidMount() {
        console.log("App componentDidMount")
    }

    // keyword
    // create and return v.doms
    render() {
        console.log("App render");
        // use () for jsx
        return (
            <div>
                 <Header title="Product App" />
                 <Footer year={2022} title="Product App"
                        branches={ ['Mysore', 'Bangalore', 'Chennai'] }
                        weekend
                 >
                     {/* this area is known as content children in html 
                         the content children is passed as props to child comopnent
                     */}
                     <p>Store time: 9:00 to 10:00 PM working days</p>
                     <p>Store Time: 9:00 to 1:00 on holidays</p>
                 </Footer>
            </div>
        )
    }
}

// while importing any alias name work, and while importin no curly for default export
export default App;