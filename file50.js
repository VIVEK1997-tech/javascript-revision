console.log("hello world");

const button=document.querySelector(".one");
button.addEventListener("click",(event)=>{
    console.log(event.target.textContent);
})