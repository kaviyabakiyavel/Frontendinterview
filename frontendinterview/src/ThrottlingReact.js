// Throttling bascially to limit the amount a function is invoked.
// delay the function called based on the limit 

import React from 'react';

export default function ThrottlingReact() {
    let counter = 0;
    const throttling = (func, limit) => {
        let flag = true;
        return function () {
            if (flag){ 
                func(); 
                flag = false;
                setTimeout(() => {
                    flag = true
                }, limit)
            }
        }
    }
    const handlechange = (value) => {
        console.log("value", value)
        console.log("no of times event is fired", counter++)
    }
    const optimizedfn = throttling(value => handlechange(value), 10000)
    return (
        <div>
            <h3>Throttling Example</h3>
            <input
                type="text"
                placeholder="Enter text"
                // onChange={(event) => handlechange(event.target.value)}
                onChange={(event) => optimizedfn(event.target.value)}
            />
        </div>
    )
}