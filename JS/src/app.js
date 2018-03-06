function helloWorld() {
  return "hello world";
}

module.exports = {
  helloWorld: helloWorld,
  printNumbers: printNumbers,
  isPalindrome: isPalindrome

};

function isPalindrome(candidate){
  candidate = candidate.toLowerCase().replace(/[^a-zA-Z]/g, '');
  if (candidate==='') {
    return false;
  }
  return (candidate.split('').reverse().join('') === candidate);
}



function printNumbers() {
  let numbers = [];

  for(let i = 1; i <= 100; i++){
    if (i % 3 === 0) {
      numbers.push("fizz");
    } 
    else if (i % 5 === 0) {
      numbers.push("buzz");
    }
    else {
      numbers.push(i);
    }
  }

  return numbers;
}


