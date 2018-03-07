const app = require("../src/app");

test('it should return 0 for an empty string',() => {
  expect(app.calculator('')).toEqual(0);
})

test('it should return 0 when the number of parameters is 0',() => {
  expect(app.calculator()).toEqual(0);
})

test('it should return 0 when the parmeter is undefined', ()=>{
  expect(app.calculator(undefined)).toEqual(0);
})

test('it should return 0 when the parameter is null', ()=>{
  expect(app.calculator(null)).toEqual(0);
})

test('it should return 0 when the parameter is not a string', ()=>{
  expect(app.calculator([1,2,3])).toEqual(0);
  expect(app.calculator(/[a-z]/)).toEqual(0);
  expect(app.calculator(1)).toEqual(0);
  expect(app.calculator(0.445)).toEqual(0);
  expect(app.calculator({banana:'is a fruit'})).toEqual(0);
})

test('it should return the value of a simple string as a number', () => {
  expect(app.calculator('0')).toEqual(0);  
  expect(app.calculator('2')).toEqual(2); 
  expect(app.calculator('432')).toEqual(432);   
})

test('it should return the value of multiple simple strings as a sum total', () => {
  expect(app.calculator('5,10')).toEqual(15);  
  expect(app.calculator('0,10')).toEqual(10);  
  expect(app.calculator('21,150')).toEqual(171);  

})


test('it should return false when the number of parameters is 0', ()=>{
  expect(app.isPalindrome()).toBe(false);
})
test('it should return false when the parmeter is undefined', ()=>{
  expect(app.isPalindrome(undefined)).toBe(false);
})
test('it should return false when the parameter is null', ()=>{
  expect(app.isPalindrome(null)).toBe(false);
})
test('it should return false when the parameter is not a string', ()=>{
  expect(app.isPalindrome([1,2,3])).toBe(false);
  expect(app.isPalindrome(/[a-z]/)).toBe(false);
  expect(app.isPalindrome(1)).toBe(false);
  expect(app.isPalindrome(0.445)).toBe(false);
  expect(app.isPalindrome({banana:'is a fruit'})).toBe(false);
})

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

