interface User {
  name: string;
  age: number;
}

function sumOfAge(user1: User, user2: User) {
  return user1.age + user2.age;
}

const result = sumOfAge(
  {
    name: "Musab",
    age: 24,
  },
  { name: "Hassan", age: 25 }
);

console.log(result);
