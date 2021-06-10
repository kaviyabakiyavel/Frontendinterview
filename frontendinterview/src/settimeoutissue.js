//settimeout delay of 5000 doesnt wait for 5000 ms 

//suppose million lines of code which take 10 sec to excute in that case . 
//global excution context is still busy to excute 1million line of code .
//settimeout excution is done . but waiting for 1million line to be excute wait for 10 sec.
//settimeout function pushed into callback queue -> "event loop" constantly it will check the call stack its empty or not 
//global excution context does not move out before 10 sec from the call stack.
//concurrency model in javascript

//op
//1) global ecution context is created in call stack.
//2) console.log(start) print 
//3) settimeout - callback function register in webapi.
//4) console.log(end) print
//5) conole.log(callback) print

//write code fordelay 10 sec
console.log("start");
setTimeout(function cb() {
    console.log("call back");
}, 5000);
console.log("end");
let startDate = new Date().getTime();
let endDate = startDate;
while (endDate < startDate + 10000) {
    debugger
    endDate = new Date().getTime();
}

console.log("while expires")