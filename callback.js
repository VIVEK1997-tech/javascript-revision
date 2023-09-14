// callbacks,callback hell
// console.log("hello world");
const heading1=document.querySelector(".heading-1");
const heading2=document.querySelector(".heading-2");
const heading3=document.querySelector(".heading-3");
const heading4=document.querySelector(".heading-4");
const heading5=document.querySelector(".heading-5");
const heading6=document.querySelector(".heading-6");
const heading7=document.querySelector(".heading-7");

setTimeout(()=>{

    heading1.textContent="heading-1";
    heading1.style.color="#9d8762";

    setTimeout(()=>{
        heading2.textContent="heading-2";
        heading2.style.color="orange";
        setTimeout(()=>{
            heading3.textContent="heading-3";
            heading3.style.color="purple";
            setTimeout(()=>{
                heading4.textContent="heading-4";
                heading4.style.color="#b301fe";
                setTimeout(()=>{
                    heading5.textContent="heading-5";
                    heading5.style.color="Pink";
                    setTimeout(()=>{
                        heading6.textContent="heading-6";
                        heading6.style.color="#9fc03f";
                        setTimeout(()=>{
                            heading7.textContent="heading-7";
                            heading7.style.color="#d52aa2";
                    
                            
                        },1000);
                        
                    },3000);
                    
                },2000);
                
            },1000);
            
        },2000);
        
    },2000);

   

},1000);
