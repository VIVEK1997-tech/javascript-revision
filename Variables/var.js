// console.log("Vivek yadav");
'use strict'
// var fullName="Vivek yadav";
//     fullName="vikas yadav";

//  firstName='raghav';

//     console.log(firstName);

// console.log(fullName);


// function hello()
// {
//     let b='c++';
//     const c='python';
//     if(true)
//     {
//         var a='javacript';
//         console.log(a);
//         console.log(b);
//         console.log(c);
//     }
//     console.log('Outside If Statement');
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// hello();


// <---block scope---->


const c=3;
{
    const c=5;
}
console.log(c);
//its not going to throw an SyntaxError:Identifier 'c' has already been declared because of c uniquely declared in a blocked scoped an its have own  execution context

// by using the block statement we can avoid the polluting the naming space at global context
