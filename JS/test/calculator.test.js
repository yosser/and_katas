const app = require("../src/calculator");


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
});

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


test('it should return 0 if our string splits to more than 2 numbers', () => {
    expect(app.calculator('2,3,4')).toEqual(0);
    expect(app.calculator('1,3,2,3,4')).toEqual(0);
    expect(app.calculator('2,3,4,a')).toEqual(0);
})

test('it should return 0 when the input is a integer and the value between two commas is an empty string', ()=>{
    expect(app.calculator('2,,')).toEqual(0);
    expect(app.calculator(',,')).toEqual(0);
    expect(app.calculator('2,3,,4')).toEqual(0);
    expect(app.calculator('2,3,,a')).toEqual(0);
})

