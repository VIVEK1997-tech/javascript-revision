// setTimeOut,setTimeInterval


console.log("Hii there is Rohan");

//  const id=  setTimeout(()=>{
//     console.log("inside the settime out function");
// },1000);

// console.log(id);

const id=setInterval(()=>{
    console.log("inside the time interval");
},1000);

for(i=1;i<100;i++){
    console.log("inside the loop");
}

// clearTimeout(id);

setTimeout(()=>{
    clearInterval(id)
    console.log("halt");
},10000);

console.log("End code");




