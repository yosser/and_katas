module.exports = {
    calculator: calculator
};

function calculator(input) {
    if (typeof input !== 'string'){
      return 0;
    }
    if (input === ""){
      return 0;
    }
    
    let numbers = input.split(',');
    const valid = numbers.every(number => number.match(/^\-?[0-9]+$/));
    if (!valid) {
        return 0;
    }
    if (numbers.length > 2) {
        return 0;
    }
    let sum =  numbers.map(acc => parseInt(acc)).reduce((acc, current) => acc + current);

    return sum;
    
  }
