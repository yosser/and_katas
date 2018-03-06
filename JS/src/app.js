
module.exports = {
  isPalindrome: isPalindrome

};

function isPalindrome(palindrome){
  sanitised = palindrome.toLowerCase().replace(/[^a-zA-Z]/g, '');
  if (sanitised === '') {
    return false;
  }
  return (sanitised.split('').reverse().join('') === sanitised);
}




