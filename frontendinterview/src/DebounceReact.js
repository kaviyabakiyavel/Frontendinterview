
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
import { FaSearch } from "react-icons/fa";

function Search(props) {
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
    }
    const optimizedfn = debounce(value => handlechange(value), 2000)
    return (
        <div className="inputContainer">
            <i className="icon"><FaSearch size={12} /></i>
            <input
                type={'search'}
                name={'search'}
                placeholder={'Search'}
                onChange={(event) => optimizedfn(event.target.value)}
                className="searchBox"
            />
        </div>
    );
}
export default Search;

