// console.log("set");

const button=document.querySelector("button");
// console.log(button);

console.log("rgb");
// console.log(red);
const body=document.body;
const id= setInterval(()=>{
const red=Math.floor(Math.random()*126);
const green=Math.floor(Math.random()*126);
const blue=Math.floor(Math.random()*126);
const rgb= `rgb(${red},${green},${blue})`;
   body.style.backgroundColor=rgb;
   console.log(rgb);
},1000);

button.addEventListener('click',()=>{
    clearInterval(id);
    button.textContent=body.style.backgroundColor;
});

