// sort method
// sort methods behave quite differently in Js 
// element sorted based on the string i.e. firstly sort method convert the element into string and then perform sorting based on the basis of ascii value of character 

const numbers=[300,500,100,50,600];

const compare=(a,b)=>a-b; 
numbers.sort(compare);
console.log(numbers);
const products=[{productId:1, productName:"p1",price:300},
                {productId:2, productName:"p2",price:2000},
                {productId:3, productName:"p3",price:200},
                {productId:4, productName:"p4",price:5500},
                {productId:5, productName:"p5",price:8000}];

        products.sort((a,b)=>a.price-b.price);
        console.log(products);

