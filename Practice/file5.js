// map method
// map method takes callback function as argument amd perform specific task on each element and
// return a new array

// const numbers=[10 ,20 ,30, 40 ,50];

// const mulnumber=  numbers.map(number=>number*3);

// console.log(mulnumber);


const users =[  { userId: 2345, firstName: "ram lakhan", gender: 'male' },
                { userId: 456, firstName: "ram khelawan", gender: 'male' },
                { userId: 956, firstName: "mithila", gender: 'female' } ]

    const usersfirst=users.map(user=>user.firstName);

    console.log(usersfirst);
    

     
