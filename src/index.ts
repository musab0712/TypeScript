interface User {
  id: number;
  name: string;
  age: number;
  email: string;
}

type UpdateUser = Pick<User, "name" | "email">;

const displayUserProfile = (user: UpdateUser) => {
  console.log(`Name: ${user.name}, Email: ${user.email}`);
};

displayUserProfile({ name: "musab", email: "musab@gmail.com" });
