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
    let val =  input.split(',',2).map(acc => parseInt(acc)).reduce((acc, current) => acc + current);
    return val;
  }
  
  