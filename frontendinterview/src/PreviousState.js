//https://stackoverflow.com/questions/54807454/what-is-prevstate-in-reactjs
//when to use previous state 
import react, { Component } from 'react';

export default class PreviousState extends Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }
    }
    //by using arrow function auto bind to compoennt object tat object we are refering by using this keyword
    //https://stackoverflow.com/questions/54807454/what-is-prevstate-in-reactjs
    // handleClick = () => {
    //     debugger
    //     console.log("this in handleclick method", this)
    //     this.setState({ count: this.state.count + 1 });
    //     this.setState({ count: this.state.count + 1 });
    //     this.setState({ count: this.state.count + 1 });
    //     this.setState({ count: this.state.count + 1 });
    // } //output is 1 
    handleClick = () => {
        debugger
        console.log("this in handleclick method", this)
        this.setState(prevState => ({ count: prevState.count + 1 }));
        this.setState(prevState => ({ count: prevState.count + 1 }));
        this.setState(prevState => ({ count: prevState.count+ 1 }));
        this.setState(prevState => ({count : prevState.count + 1}));
    }
    render() {
        console.log("this in render method", this)
        console.log("count", this.state.count)
        return (
            <div>
                <button onClick={this.handleClick}>Onclick</button>
            </div>
        )
    }
}