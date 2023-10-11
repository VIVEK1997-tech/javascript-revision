//filter mehtod
//filter method  takes a callback function and callback function return boolean true and false based on condition 
// and filter function return array which passes the condition of callback function

const ages=[15,16,17,19,21,23];
 
 const isadult=age=>age>=18;   //arrow function      
 const adult=ages.filter(isadult);
 console.log(adult);