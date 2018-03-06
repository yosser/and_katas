const app = require("../src/app");

test('it should say an empty string is not a palindrome', () => {
  expect(app.isPalindrome('')).toBe(false);
})

test('it should consider a single letter to be a palindrome', () => {
  expect(app.isPalindrome('x')).toBe(true);
  expect(app.isPalindrome('e')).toBe(true);
})

test('it should consider a string of length 2 that contains the same characters a palindrome', () => {
  expect(app.isPalindrome('xx')).toBe(true);
  expect(app.isPalindrome('xa')).toBe(false);
  expect(app.isPalindrome('bb')).toBe(true);
  expect(app.isPalindrome('bx')).toBe(false);
})

test('it should check for simple palindromes of any length',() => {
  expect(app.isPalindrome('banana')).toBe(false);
  expect(app.isPalindrome('roxor')).toBe(true);
  expect(app.isPalindrome('herring')).toBe(false);
  exepct(app.isPalindrome('ertytre')).toBe(true);
})



test("it should print hello world", () => {
  expect(app.helloWorld()).toBe("hello world");
});

test("It should print 1 as first number", () => {
  expect(app.printNumbers()[0]).toBe(1);
});

test("The length of the returned array should be 100", () => {
  expect(app.printNumbers().length).toBe(100);
});

test("It should print buzz instead of last number", () => {
  expect(app.printNumbers().pop()).toBe("buzz");
});

test("It should print fizz for the first 3rd number", () => {
  let allNumbers = app.printNumbers();
  expect(allNumbers[2]).toBe("fizz");
});

test("It should print buzz for every 5th number", () => {
  let allNumbers = app.printNumbers();
  
  for (let i = 0; i < allNumbers.length; i++) {
    if (allNumbers[i] % 5 == 0) {
      expect(allNumbers[i]).toBe("buzz");
    }
  }
});
