// array destructuring
const array = ['23', '35', '345', '245'];
console.log(array[0]);
const [arr1, arr2, ...myarr] = array;
console.log(arr1);
console.log(arr2);
console.log(myarr);
//object intro
const person = {
    name: "vivek",
    age: 23,
    "required skills": ["web dev", "dsa", "Reactjs"]

};

console.log(person);
console.log(typeof person);
//access of properties
person.gender = "male";
console.log(person);
console.log(person.name); // dot notation accessibilty
const key = "Email";
person[key] = "yadav.0101vivek@gmail.com";
console.log(person);
console.log(person["required skills"]); //bracket notation accessibility
console.log(person[key]);
//iteration on Object

for (let key in person) {
    console.log(key, " : ",
        person[key]);
}