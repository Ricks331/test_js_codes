import { describe, it, test, expect } from "vitest";
import {
  USER_API,
  add,
  reverseString,
  languages,
  userDetails,
  fetchUser,
  isAuthenticated,
} from "./helper";

describe("add function", () => {
  it("returns 1+1=2", () => {
    expect(add(1, 1)).toBe(2);
  });

  it("returns 5+5=10", () => {
    expect(add(5, 5)).toBe(10);
  });

  it("Check for strings", () => {
    expect(add("1", "1")).toBe(0);
  });

  it("Check for arrays", () => {
    expect(add(["1"], ["1"])).toBe(0);
  });
});

describe("reverseString()", () => {
  it("check if it is defined", () => {
    expect(reverseString).toBeDefined;
  });

  it("check if string reverses properly", () => {
    expect(reverseString("ab")).toBe("ba");
  });

  it("check if string reverses properly", () => {
    expect(reverseString("hai")).toBe("iah");
  });
});

describe("User_api url", () => {
  it("check if url is correct", () => {
    expect(USER_API).toBe("https://api.com/user");
  });
});

describe("languages", () => {
  it("check if language has 3 items", () => {
    expect(languages).toEqual(["js", "css", "html"]);
  });
});

describe("User details object", () => {
  it("check if obj has 2 properties", () => {
    expect(userDetails).toHaveProperty("name");
    expect(userDetails).toHaveProperty("age");
  });
});

// // so not use this instead use mswjs(mock service worker) when timeout
// // the 100000 below given is the timeout period default it will be less than 100000
// describe("API", () => {
//   it("check if API returns data", async () => {
//     const data = await fetchUser();
//     expect(data).toHaveProperty("title");
//     expect(data).toHaveProperty("id");
//     expect(data).toHaveProperty("completed");
//   }, 100000);
// });

describe("isAuthenticated", () => {
  it("if user is logged in", () => {
    expect(isAuthenticated(true)).toBeTruthy();
  });

  it("if user is not logged in", () => {
    expect(() => isAuthenticated(false)).toThrow();
  });
});
