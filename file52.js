// callback, callback hell
 function addtwoNo(a,b, callback){
    console.log(a+b);
    callback();
 }

 addtwoNo(2,3,()=>{
    console.log("call back function");
 });