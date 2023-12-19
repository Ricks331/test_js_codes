import axios from "axios";

export const add = (n1, n2) => {
  if (typeof n1 !== "number" || typeof n2 !== "number") {
    return 0;
  }
  return n1 + n2;
};

export const reverseString = (value) => {
  // ab => ba
  return value.split("").reverse().join("");
};

export const USER_API = "https://api.com/user";

export const languages = ["js", "css", "html"];

export const userDetails = {
  name: "debug media",
  age: 20,
};

export const fetchUser = async () => {
  const response = await axios("https://jsonplaceholder.typicode.com/todos/1");
  return response.data;
};

export const isAuthenticated = (isLogged = false) => {
  if (isLogged) {
    return "welcome";
  }
  throw new Error("user is not logged in");
};
