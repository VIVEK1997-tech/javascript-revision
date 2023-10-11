console.log("basic counter project");

//accessing the dom element
let add=document.getElementById("add");
let substract=document.querySelector("#substract");

// applying a methods over Dom element

add.addEventListener("click",()=>{
    let output=document.querySelector("#output")
    let result=Number(output.innerText) + 1

        if(result>10){
            result=0;
        }

    output.innerText=result
})

substract.addEventListener("click",()=>{
    let output=document.querySelector("#output")
    let result=Number(output.innerText)-1


        if(result<0){
            result=0;
        }

    output.innerText=result
})