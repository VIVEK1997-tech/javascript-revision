// comsuming the promises

const myPromise=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("foo");
    },300);
});

myPromise
.then(()=>{
    console.log("Promise is fulfilled ");
})
.catch((error)=>{
    console.log(error);
})