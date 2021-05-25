//https://codeburst.io/binding-functions-in-react-b168d2d006cb
//why do we bind function in constructor 
//https://levelup.gitconnected.com/why-did-we-have-to-bind-our-functions-in-react-apps-ee32978af12e
// 1)when we create a class we are basically creating an object,
// 2) the methods on React.Component, adding some properties and then returning that object.
// 3)The constructor is where these properties are added.
// 4) constructor will add handleClick event property inside tha call 

import React, { Component } from 'react';
export default class Callapplybind extends Component {
    constructor() {
        super()
        this.state = {
            numofClicks: 0
        }
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick() {
        console.log("this in handleclick method", this)
        this.setState(previousState => {
            return { numofClicks: previousState + 1 };
        })
    }
    // handleClick = () => {
    //     console.log("this in handleclick method", this)
    //     var newnumofClicks = this.state.numofClicks
    //     this.setState({
    //         numofClicks : newnumofClicks + 1
    //     })
    // }
    render() {
        console.log("this in render method", this)
        return (
            <div>
                <button onClick={this.handleClick}>Click Me!</button>
                <p>Number of times clicked = {this.state.numofClicks}</p>
            </div>
        )
    }
}