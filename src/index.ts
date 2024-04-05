interface User {
  name: string;
  email: string;
}

type Users = Record<string, User>;

const users: Users = {
  musab: { name: "musab", email: "musab@gmail.com" },
  hassan: { name: "hassan", email: "hassan@gmail" },
};

console.log(users);
