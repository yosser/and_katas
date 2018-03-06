function helloWorld() {
  return "hello world";
}

module.exports = {
  helloWorld: helloWorld,
  printNumbers: printNumbers,
  isPalindrome: isPalindrome

};

function isPalindrome(candidate){
  if (candidate===''){
    return false;
}
  if (candidate.length === 1){
    return true;
  }

  if (candidate.split('').reverse().join('') !== candidate){
    return false;
  }
  return true;
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


