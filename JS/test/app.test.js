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
  expect(app.isPalindrome('ertytre')).toBe(true);
})

test('it should ignore capital letters', () => {
  expect(app.isPalindrome('RoXor')).toBe(true);
  expect(app.isPalindrome('WOw')).toBe(true);
  expect(app.isPalindrome('RoXo')).toBe(false);
  expect(app.isPalindrome('tHyhT')).toBe(true);
})

test('it should figure out what to do with white space', () => {
  expect(app.isPalindrome(' sun  nus')).toBe(true);
  expect(app.isPalindrome('ra bb it  tib b ar ')).toBe(true);
  expect(app.isPalindrome('is this a palindrome')).toBe(false);
})

test('it should figure out what to do with punctuation', () => {
  expect(app.isPalindrome('Was it a car or a cat I saw?')).toBe(true);
  expect(app.isPalindrome('A man, a plan, a canal, Panama!')).toBe(true);
  expect(app.isPalindrome('is this a palindrome?')).toBe(false);
})

