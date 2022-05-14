import React from 'react';
import Cart from './cart/components/Cart';
import Checkout from './cart/components/Checkout';
import Footer from './components/Footer';
import Header from './components/Header';
import LangContext, { English, Hindi, Tamil } from './contexts/LangContext';
import ThemeContext from './contexts/ThemeContext';


class App extends React.Component {
    // called 1st
    constructor(props) {
        super(props)
        console.log("App comp created")

        this.state = {
            lang: English
        }
    }

    // called after first mount
    // called after first render,after v.dom placed in real dom first time
    // Creation cycle
    // keyword
    componentDidMount() {
        console.log("App componentDidMount")
    }

    changeEnglish = () => {
        this.setState({
            lang: English
        })
    }

    changeHindi = () => {
        this.setState({
            lang: Hindi
        })
    }

    changeTamil = () => {
        this.setState({
            lang: Tamil
        })
    }

    // keyword
    // create and return v.doms
    render() {
        console.log("App render");
        // use () for jsx
        // ThemeContext.Provider provides values for ThemeContext.Consumer
        // by overriding default value given 
        return (
            <LangContext.Provider value = {this.state.lang} >
            <ThemeContext.Provider value= "lightgreen">
            <div>
                 <button onClick={this.changeEnglish}>English</button>
                 <button onClick={this.changeHindi}>हिन्दी</button>
                 <button onClick={this.changeTamil}>தமிழ்</button>
                 <Header title="Product App" />
                
                 <Checkout />

                 <Cart />

                
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
            </ThemeContext.Provider>
            </LangContext.Provider>
        )
    }
}

// while importing any alias name work, and while importin no curly for default export
export default App;