// anonymous function---- >

// (function() {
// console.log("anonymous function");
// });

// assinging function in  variable----->

// let show=function() {
// console.log("show function");
// }
// show();

// passing function as a parameter------>

// setTimeout(function()  {
//     console.log("anonymous functon");
// }, 2000);

// function expression----->

// let show1=function() {

//     console.log( 'lorem3' );

// }
// show1();

// normal function------->

// function show2() {
//     console.log('called a nomal function');
// }
// show2();

// immediately invoked function execution------>


// (function (){
//     console.log("this is immediately invoked function");
// })();

// arrow function--->

let arr=()=>{
    console.log('this is arrow function');
}
arr();

// map methods----->

let arr2=[2,4,5,6,7,8,8,9]

let narr=arr2.map((ele)=>ele*5)
console.log(narr);


// reduce methods------->

let arr3=[23,45,56,7,78,9,90]

let newarr3=arr3.reduce((total,num)=>(total-num))
console.log(newarr3);