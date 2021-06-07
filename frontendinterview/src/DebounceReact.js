
// //when your clicking button on multiple times. 
// //Event could excute that event at the last click 
// //when mouse moves event from on point to another it will keep firing the mouse event.
// //on every mouse move you dont want to fire that event . as soon as end and then you want to fire that event.(it only happ at one time on a mouse move)
// //Scrolling also u can use debounce function to prevent lots of events being fired so .
// //https://levelup.gitconnected.com/debounce-in-javascript-improve-your-applications-performance-5b01855e086
// //https://www.freecodecamp.org/news/debounce-explained-how-to-make-your-javascript-wait-for-your-user-to-finish-typing-2/

// import React from 'react';
// import './App.css';

// let counter = 0;
// const getData = () => {
//   //making Api call and getting the respobse data 
//   console.log('fetching Data...', counter++)
// }

// const debouncefunction = (fn, delay) => {
//   // anonymous  function
//   let timer;
//   timer = setTimeout(() => {
//     getData()
//   }, delay);
// }
// const higherorderfunction = debouncefunction(getData, 1000)

// function App() {
//   return (
//     <div className="App" style={{ paddingTop: "20%" }}>
//       <span style={{ fontWeight: "700", padding: "4px" }}>Debounce function is to reduce the API call request to server</span><br />
//       <input type="text" placeholder="search..." onKeyUp={higherorderfunction} />
//     </div>
//   );
// }

// export default App;



import React from "react"
import './App.css'


function Search(props) {
    let counter = 0;
    //did dynamic search using for loop
    // const getSearchedValue = (value) => {
    //     debugger
    //     let data = [...this.props.GetSubAddUserDetails]
    //     let filterkey = ["user_name", 'login_id', 'email_id','country','location','department','phone_no','is_subscription_admin','user_type']
    //     let result = []
    //     for (let i = 0; i < data.length; i++) {
    //         for (let j = 0; j < filterkey.length; j++) {
    //             debugger
    //             let key = filterkey[j]
    //             if (data[i][key] === value[0]) {
    //                 result.push(data[i]);
    //                 break;
    //             }
    //         }
    //     }
    //     console.log("result", result)
    //     this.setState({
    //         searchedFilteredData: result
    //     })
    // }
    //es6 methods  https://stackoverflow.com/questions/45991273/how-to-use-filter-to-search-in-multiple-key-values-of-objects-in-an-array
    // const getSearchedValue = (value) => {
    //     let data = [...this.props.GetSubAddUserDetails]
    //     let searchvalue = value[0].toLowerCase();
    //     let filtered =  data.filter(function (eachobj) {
    //         return Object.values(eachobj).some(val => String(val).toLowerCase().includes(searchvalue));
    //     });
    //     this.setState({
    //         searchedFilteredData: filtered
    //     })
    // }
    //loadash
    const debounce = (func, delay) => {
        let timer;
        return function (...args) {
            if (timer) clearTimeout(timer)
            timer = setTimeout(() => {
                timer = null
                func(args);
            }, delay);
        }
    }
    const handlechange = (value) => {
        console.log("value", value)
        console.log("no of times event is fired",counter++)
       // getSearchedValue(value)
    }
    const optimizedfn = debounce(value => handlechange(value), 2000)
    return (
        <div>
            <h3>Debounce Example React</h3>
            <input
                type="text"
                placeholder="Enter text"
                // onChange={(event) => handlechange(event.target.value)}
                onChange={(event) => optimizedfn(event.target.value)}
            />
        </div>

    );
}
export default Search;

