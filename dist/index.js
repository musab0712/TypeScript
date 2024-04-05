"use strict";
function sumOfAge(user1, user2) {
    return user1.age + user2.age;
}
const result = sumOfAge({
    name: "Musab",
    age: 24,
}, { name: "Hassan", age: 25 });
console.log(result);
