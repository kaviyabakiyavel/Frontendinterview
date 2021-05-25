import React, { Component } from 'react';

export default class Stateunderstand extends Component {
    // state ={
    //     counter : 0,
    // }
    constructor() {
        super()
        this.state = {
            counter: 0,
        }
    }
    // Onclickbutton = () => {
    //     this.setState({
    //         counter: this.state.counter + 1
    //     })
    //     console.log(this.state.counter)
    //     //setState is asynchronous both lines are excuting at the same level 
    //     //wont get the updated value in this console 
    //     //for avoid this problem we can use setState callback 
    // }

    //By setState callback - we can update the state dynamically
    // Onclickbutton = () => {
    //     this.setState({
    //         counter: this.state.counter + 1
    //     }, () => console.log(this.state.counter))
    // }

    //wrong way of doing is this.state is declearing inside the setState 
    //so outside of setState decelare the variable 
    Onclickbutton = () => {
        var newcounter = this.state.counter + 1
        this.setState({
            counter: newcounter
        }, () => console.log(this.state.counter))
     }

    //instead of declaring into variable as newcounter use previousState
    Onclickbutton = () => {
        this.setState(previousState => {
            return {counter: previousState.counter + 1}
        })
     }

    render() {
        return <div>
            <div>{this.state.counter}</div>
            <button onClick={this.Onclickbutton}>Onclick</button>
        </div>
    }
}


// export default class Stateunderstand  extends React.Component{
//     constructor(){
//         super();
//         //set initial state
//         this.state = {
//             istoggle : true
//         }
//     }
//     handleClick = () => {
//         this.setState(previousState => {
//             return {
//                 istoggle : !previousState.istoggle
//             }
//         })
//     }
//     render(){
//        return <div>
//             <button onClick={this.handleClick}>{this.state.istoggle ? 'enabled' : 'disabled'}</button>
//         </div>
//     }
// }
