module.exports = {
    calculator: calculator
};

function calculator(input) {
    if (typeof input !== 'string' || input === ""){
      return 0;
    }
    let numbers = input.split(',');
    if (numbers.length > 2) {
        return 0;
    }
    if(!numbers.every(number => number.match(/^\-?[0-9]+$/))) {
        return 0;
    }
    return numbers.map(acc => parseInt(acc)).reduce((acc, current) => acc + current);
  }
