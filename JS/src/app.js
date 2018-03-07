
module.exports = {
  isPalindrome: isPalindrome,
  calculator: calculator
};

function isPalindrome(palindrome) {
  if (typeof palindrome !== 'string'){
    return false;
  }
  sanitised = palindrome.toLowerCase().replace(/[^a-z0-9A-Z]/g, '');
  if (sanitised === '') {
    return false;
  }
  for(let i = 0; i < Math.floor(sanitised.length / 2); i++) {
    if( sanitised.charAt(i) !== sanitised.charAt(sanitised.length - 1 - i)) {
      return false;
    }
  }
  return true;
//  return Array.from(sanitised).every((ch,idx) => sanitised[sanitised.length - 1 - idx] === ch);
}

function calculator(input) {
  return 0;
}

