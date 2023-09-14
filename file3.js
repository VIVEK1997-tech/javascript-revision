//object inside the array
// very useful in real world applications
const users = [{ userId: 2345, firstName: "ram lakhan", gender: 'male' },
    { userId: 456, firstName: "ram khelawan", gender: 'male' },
    { userId: 956, firstName: "mithila", gender: 'female' }
]
console.log(users);
for (let user of users) {
    console.log(user.firstName);
}

















//nested destructuring